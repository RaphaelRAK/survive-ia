'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { trackEvent } from '@/lib/analytics'
import {
  metiers,
  categorieOrder,
  questionsGeneriques,
  getScoreResult,
  type Metier,
} from '@/lib/quiz-data'

const CAT_COLORS: Record<string, string> = {
  Tech: '#7c9eff',
  Business: '#ff9f43',
  Créatif: '#ff6b9d',
  'Santé & Humain': '#2ee6c8',
  'Artisanat & Terrain': '#ffc857',
}

const METIER_IMAGES: Record<string, string> = {
  dev: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  design: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80',
  data: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  commercial: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80',
  manager: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
  rh: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  comptable: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  graphiste: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
  redacteur: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  photographe: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
  medecin: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
  enseignant: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
  psy: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
  artisan: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&w=900&q=80',
  chauffeur: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
}

const METIER_SUMMARIES: Record<string, string> = {
  dev: "Crée des applications, automatise des tâches et transforme les idées en produits numériques.",
  design: "Conçoit des interfaces claires et intuitives, centrées sur l'utilisateur et l'expérience.",
  data: 'Analyse les données pour générer des insights utiles et orienter les décisions business.',
  commercial: 'Développe le chiffre d’affaires grâce à la relation client et à la négociation.',
  manager: "Coordonne l'équipe, fixe le cap et transforme les objectifs en résultats concrets.",
  rh: "Recrute, accompagne les talents et renforce la culture d'entreprise.",
  comptable: 'Sécurise la santé financière via le suivi des comptes et le conseil.',
  graphiste: 'Donne vie aux idées avec une direction visuelle cohérente et impactante.',
  redacteur: 'Rédige des contenus persuasifs adaptés à une audience et à une marque.',
  photographe: 'Capture des images fortes qui racontent une histoire et valorisent un projet.',
  medecin: "Soigne, diagnostique et accompagne les patients dans leur parcours de santé.",
  enseignant: 'Transmet les savoirs et aide les élèves à progresser durablement.',
  psy: "Accompagne les personnes avec écoute, méthode et relation thérapeutique.",
  artisan: 'Intervient sur le terrain avec un savoir-faire technique concret et précis.',
  chauffeur: 'Assure le transport et la logistique avec fiabilité et sens du service.',
}

type Stage = 'selection' | 'quiz' | 'result'

type OfficialSource = {
  title: string
  url: string
}

const slide = {
  initial: (d: number) => ({ x: d > 0 ? 70 : -70, opacity: 0, filter: 'blur(4px)' }),
  animate: { x: 0, opacity: 1, filter: 'blur(0px)' },
  exit: (d: number) => ({ x: d > 0 ? -70 : 70, opacity: 0, filter: 'blur(4px)' }),
}

const stagger = {
  show: { transition: { staggerChildren: 0.055 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const duration = 1400
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, active])
  return count
}

export default function QuizExperience() {
  const [stage, setStage] = useState<Stage>('selection')
  const [selectedMetier, setSelectedMetier] = useState<Metier | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [direction, setDirection] = useState(1)
  const [countActive, setCountActive] = useState(false)
  const [quizStartedAt, setQuizStartedAt] = useState<number | null>(null)
  const [completionTracked, setCompletionTracked] = useState(false)
  const stateRef = useRef({
    stage: 'selection' as Stage,
    completionTracked: false,
    selectedMetier: null as Metier | null,
    answersCount: 0,
    totalQuestions: 0,
    quizStartedAt: null as number | null,
  })

  function getOfficialSources(metier: Metier, zone: 'safe' | 'transition' | 'attention'): OfficialSource[] {
    const common: OfficialSource[] = [
      { title: 'WEF Future of Jobs Report 2025', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
      { title: 'OCDE - L intelligence artificielle et le marche du travail', url: 'https://www.oecd.org/fr/emploi/l-intelligence-artificielle-et-le-marche-du-travail.htm' },
      { title: 'OIT - Generative AI and Jobs', url: 'https://www.ilo.org/publications/generative-ai-and-jobs-global-analysis-potential-effects-job-quantity-and' },
    ]
    if (metier.categorie === 'Santé & Humain') {
      return [...common, { title: 'OMS - Ethics and governance of AI for health', url: 'https://www.who.int/publications/i/item/9789240029200' }]
    }
    if (metier.categorie === 'Tech') {
      return [...common, { title: 'EU AI Act - texte officiel', url: 'https://artificialintelligenceact.eu/' }]
    }
    return common
  }

  const adaptiveGenericQuestions = selectedMetier
    ? questionsGeneriques.map((q) => {
        if (q.id === 'gen-1') {
          return {
            ...q,
            question: `Dans ton métier (${selectedMetier.label}), ton usage de l'IA est à quel niveau ?`,
            options: [
              { label: `J'utilise l'IA chaque semaine sur mes tâches (${selectedMetier.contexte.tachesAutomatisables})`, score: 0 },
              { label: "Je l'utilise parfois pour gagner du temps", score: 1 },
              { label: 'Je teste encore sans vraie méthode', score: 2 },
              { label: "Je ne l'utilise pas du tout", score: 3 },
            ],
          }
        }
        if (q.id === 'gen-2') {
          return {
            ...q,
            question: `Ta valeur la plus forte en tant que ${selectedMetier.label}, c'est surtout...`,
            options: [
              { label: selectedMetier.contexte.forcesHumaines, score: 0 },
              { label: "La qualité de ton exécution", score: 1 },
              { label: 'Le respect du process', score: 2 },
              { label: 'Les tâches répétitives au quotidien', score: 3 },
            ],
          }
        }
        if (q.id === 'gen-3') {
          return {
            ...q,
            question: `Pour ${selectedMetier.label}, les tâches qui peuvent s'automatiser (${selectedMetier.contexte.tachesAutomatisables})...`,
            options: [
              { label: "Je les automatise déjà pour me concentrer sur l'essentiel", score: 0 },
              { label: 'Je commence à les réduire progressivement', score: 1 },
              { label: 'Je les fais encore majoritairement à la main', score: 2 },
              { label: 'Ce sont presque toutes mes tâches', score: 3 },
            ],
          }
        }
        return {
          ...q,
          question: `Si ton métier (${selectedMetier.label}) évolue fortement avec l'IA, tu...`,
          options: [
            { label: 'Suis déjà en train de monter en compétences', score: 0 },
            { label: 'Te formerais rapidement', score: 1 },
            { label: "Attends encore un peu avant d'agir", score: 2 },
            { label: 'Ne sais pas vraiment quoi faire', score: 3 },
          ],
        }
      })
    : []

  const deepDiveQuestions = selectedMetier
    ? [
        {
          id: `deep-${selectedMetier.id}-1`,
          emoji: '',
          question: `Dans ${selectedMetier.label}, ta part de temps sur des taches repetitives est plutot...`,
          options: [
            { label: 'Moins de 20%, je suis sur des decisions/relations', score: 0 },
            { label: 'Entre 20% et 40%', score: 1 },
            { label: 'Entre 40% et 60%', score: 2 },
            { label: 'Plus de 60%', score: 3 },
          ],
        },
        {
          id: `deep-${selectedMetier.id}-2`,
          emoji: '',
          question: `Ton niveau actuel sur les competences protegees (${selectedMetier.contexte.forcesHumaines}) ?`,
          options: [
            { label: 'Tres solide, c est mon point fort', score: 0 },
            { label: 'Correct, mais je dois progresser', score: 1 },
            { label: 'Encore faible dans mon quotidien', score: 2 },
            { label: "Quasi absent pour l'instant", score: 3 },
          ],
        },
        {
          id: `deep-${selectedMetier.id}-3`,
          emoji: '',
          question: 'Si l IA automatise une partie de ton poste, ton plan concret est...',
          options: [
            { label: 'J ai deja un plan de progression sur 3-6 mois', score: 0 },
            { label: 'J ai quelques pistes mais pas de plan clair', score: 1 },
            { label: 'Je compte m adapter au moment venu', score: 2 },
            { label: "Je n'ai aucun plan", score: 3 },
          ],
        },
        {
          id: `deep-${selectedMetier.id}-4`,
          emoji: '',
          question: 'Dans ton contexte, la qualite de ton travail depend surtout de...',
          options: [
            { label: 'Ton jugement et ton adaptation en situation reelle', score: 0 },
            { label: 'Une combinaison outils + expertise', score: 1 },
            { label: 'Des process standardises', score: 2 },
            { label: 'Des operations previsibles et repetables', score: 3 },
          ],
        },
      ]
    : []

  const allQuestions = selectedMetier ? [...adaptiveGenericQuestions, ...deepDiveQuestions, ...selectedMetier.questionsSpecifiques] : []
  const totalQuestions = allQuestions.length
  const maxScore = totalQuestions * 3
  const totalScore = answers.reduce((a, b) => a + b, 0)
  const result = selectedMetier ? getScoreResult(totalScore, selectedMetier, maxScore) : null
  const officialSources = selectedMetier && result ? getOfficialSources(selectedMetier, result.zone) : []
  const displayScore = useCountUp(totalScore, countActive)
  const progress = totalQuestions > 0 ? (currentQ + 1) / totalQuestions : 0
  const progressLabel = progress < 0.34 ? 'Bon depart, reste concentre' : progress < 0.67 ? 'Excellent rythme, tu avances bien' : 'Derniere ligne droite, finis fort'
  const accentColor = selectedMetier ? CAT_COLORS[selectedMetier.categorie] : '#ff6b4a'

  function handleSelectMetier(m: Metier) {
    setSelectedMetier(m)
    setCurrentQ(0)
    setAnswers([])
    setDirection(1)
    setCountActive(false)
    setQuizStartedAt(Date.now())
    setCompletionTracked(false)
    setStage('quiz')
    trackEvent('quiz_started', {
      metier_id: m.id,
      metier_label: m.label,
      category: m.categorie,
      total_questions: 8 + m.questionsSpecifiques.length,
    })
  }

  function handleAnswer(score: number) {
    const next = [...answers, score]
    setAnswers(next)
    setDirection(1)
    trackEvent('quiz_answered', {
      metier_id: selectedMetier?.id ?? 'unknown',
      question_index: currentQ + 1,
      total_questions: allQuestions.length,
      answer_score: score,
    })
    if (currentQ < allQuestions.length - 1) setCurrentQ(currentQ + 1)
    else {
      setStage('result')
      setTimeout(() => setCountActive(true), 500)
    }
  }

  function handleRestart() {
    if (stage === 'result') {
      trackEvent('quiz_restart_after_result', {
        metier_id: selectedMetier?.id ?? 'unknown',
      })
    }
    setDirection(-1)
    setStage('selection')
    setSelectedMetier(null)
    setCurrentQ(0)
    setAnswers([])
    setCountActive(false)
    setQuizStartedAt(null)
    setCompletionTracked(false)
  }

  useEffect(() => {
    if (stage !== 'result' || !selectedMetier || !result || completionTracked) return

    const durationSec = quizStartedAt ? Math.round((Date.now() - quizStartedAt) / 1000) : 0
    trackEvent('quiz_completed', {
      metier_id: selectedMetier.id,
      metier_label: selectedMetier.label,
      category: selectedMetier.categorie,
      score: result.indice,
      result_zone: result.zone,
      total_questions: totalQuestions,
      duration_sec: durationSec,
    })
    setCompletionTracked(true)
  }, [stage, selectedMetier, result, completionTracked, quizStartedAt, totalQuestions])

  useEffect(() => {
    stateRef.current = {
      stage,
      completionTracked,
      selectedMetier,
      answersCount: answers.length,
      totalQuestions,
      quizStartedAt,
    }
  }, [stage, completionTracked, selectedMetier, answers.length, totalQuestions, quizStartedAt])

  useEffect(() => {
    return () => {
      const current = stateRef.current
      if (current.stage !== 'quiz' || current.completionTracked || !current.selectedMetier) return
      const answeredCount = current.answersCount
      const durationSec = current.quizStartedAt ? Math.round((Date.now() - current.quizStartedAt) / 1000) : 0
      trackEvent('quiz_abandoned', {
        metier_id: current.selectedMetier.id,
        metier_label: current.selectedMetier.label,
        category: current.selectedMetier.categorie,
        answered_questions: answeredCount,
        total_questions: current.totalQuestions,
        progress_ratio: current.totalQuestions > 0 ? Number((answeredCount / current.totalQuestions).toFixed(2)) : 0,
        duration_sec: durationSec,
      })
    }
  }, [])

  const metiersByCategorie = categorieOrder.map((cat) => ({ cat, color: CAT_COLORS[cat], items: metiers.filter((m) => m.categorie === cat) }))

  return (
    <div className="root">
      <header className="hdr quiz-hdr-anim">
        <div className="quiz-top-links">
          <a className="mono" href="/">accueil</a>
          <a className="mono" href="/calcul">calcul</a>
          <a className="mono" href="/sources">sources</a>
        </div>
        <div className="hdr-badge">
          <span className="hdr-dot" />
          <span className="mono">quiz ia metier</span>
        </div>
      </header>

      <main className="main">
        <AnimatePresence mode="wait" custom={direction}>
          {stage === 'selection' && (
            <motion.div key="selection" custom={direction} variants={slide} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="stage">
              <div className="hero">
                <motion.p className="mono overline" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                  Quiz IA · Resultat nuance
                </motion.p>
                <motion.h1 className="hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                  <span className="gtext">Choisis ton metier,</span>
                  <br />
                  <em className="hero-em">on fait une analyse serieuse.</em>
                </motion.h1>
                <motion.p className="hero-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
                  Parcours personnalise, score explique, et sources officielles en fin de quiz.
                </motion.p>
              </div>

              <div className="categories">
                {metiersByCategorie.map(({ cat, color, items }, ci) => (
                  <motion.section key={cat} className="cat-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 + ci * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ ['--cat-color' as string]: color }}>
                    <div className="cat-hdr">
                      <span className="cat-pip" style={{ background: color, color }} />
                      <span className="mono cat-name">{cat}</span>
                    </div>
                    <div className="metier-grid">
                      {items.map((m, i) => (
                        <motion.button key={m.id} className="mcard" style={{ ['--mcolor' as string]: color, ['--i' as string]: String(i + ci * 3) }} onClick={() => handleSelectMetier(m)} initial={{ opacity: 0, y: 20, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? 0.4 : -0.3 }} transition={{ delay: 0.28 + ci * 0.07 + i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }} whileHover={{ scale: 1.03, rotate: 0 }} whileTap={{ scale: 0.97 }}>
                          <img className="mcard-media" src={METIER_IMAGES[m.id]} alt={m.label} loading="lazy" />
                          <div className="mcard-body">
                            <span className="mcard-label">{m.label}</span>
                            <p className="mcard-desc">{METIER_SUMMARIES[m.id]}</p>
                            <div className="mcard-meta-row">
                              <span className="mcard-meta">{cat}</span>
                              <span className="mcard-meta">{4 + 4 + m.questionsSpecifiques.length} questions</span>
                            </div>
                            <span className="mcard-cta">Commencer</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>
            </motion.div>
          )}

          {stage === 'quiz' && selectedMetier && (
            <motion.div key={`q${currentQ}`} custom={direction} variants={slide} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }} className="stage stage-quiz" style={{ ['--accent' as string]: accentColor }}>
              <div className="quiz-progress quiz-progress-anim">
                <p className="quiz-progress-msg">{progressLabel}</p>
                <div className="prog-track">
                  <motion.div className="prog-fill" initial={{ width: `${(currentQ / totalQuestions) * 100}%` }} animate={{ width: `${((currentQ + 1) / totalQuestions) * 100}%` }} transition={{ duration: 0.55, ease: 'easeOut' }} style={{ background: accentColor, ['--accent' as string]: accentColor }} />
                </div>
              </div>

              <div className="quiz-pill" style={{ borderColor: `${accentColor}44`, color: accentColor }}>
                <span>{selectedMetier.label}</span>
                <span className="pill-sep">·</span>
                <span className="mono" style={{ fontSize: '0.7rem' }}>{currentQ + 1}&nbsp;/&nbsp;{totalQuestions}</span>
              </div>

              <div className="quiz-head">
                <p className="quiz-kicker">Parcours {selectedMetier.label}</p>
                <p className="quiz-sub">Questions adaptees a la realite du metier</p>
              </div>

              <div className="q-block">
                <h2 className="q-text">{allQuestions[currentQ].question}</h2>
              </div>

              <motion.div className="options" variants={stagger} initial="hidden" animate="show">
                {allQuestions[currentQ].options.map((opt, i) => (
                  <motion.button key={i} className="opt" variants={fadeUp} onClick={() => handleAnswer(opt.score)} whileHover={{ x: 6, borderColor: accentColor }} whileTap={{ scale: 0.98 }}>
                    <span className="opt-key mono" style={{ color: accentColor }}>{String.fromCharCode(65 + i)}</span>
                    <span className="opt-text">{opt.label}</span>
                  </motion.button>
                ))}
              </motion.div>

              {currentQ > 0 && (
                <button className="back mono" onClick={() => {
                  setDirection(-1)
                  setCurrentQ(currentQ - 1)
                  setAnswers(answers.slice(0, -1))
                }}>
                  ← retour
                </button>
              )}
            </motion.div>
          )}

          {stage === 'result' && result && selectedMetier && (
            <motion.div key="result" custom={direction} variants={slide} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="stage stage-result" style={{ ['--result-color' as string]: result.color }}>
              <motion.div className="zone-badge" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.08, type: 'spring', stiffness: 220, damping: 18 }} style={{ borderColor: result.color, color: result.color }}>
                <span className="mono zone-label">{result.label}</span>
              </motion.div>

              <motion.div className="score-block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
                <div className="score-num">
                  <span className="score-big" style={{ color: result.color }}>{result.indice}</span>
                  <span className="score-denom mono">&nbsp;/ 100</span>
                </div>
                <div className="score-track">
                  <motion.div className="score-fill" initial={{ width: '0%' }} animate={{ width: `${result.indice}%` }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 }} style={{ background: result.color }} />
                </div>
              </motion.div>

              <h2 className="res-title">{result.titre}</h2>
              <p className="res-sub">{result.sousTitre}</p>
              <p className="res-body">{result.texte}</p>

              <div className="conseil" style={{ borderColor: result.color }}>
                <p className="mono conseil-lbl" style={{ color: result.color }}>Conseil</p>
                <p className="conseil-txt">{result.conseil}</p>
              </div>

              <div className="sources">
                <p className="mono sources-lbl">Sources officielles</p>
                <div className="sources-list">
                  {officialSources.map((s) => (
                    <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="source-link">
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>

              <motion.div className="actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <motion.button className="btn-out" onClick={handleRestart} whileTap={{ scale: 0.97 }}>Recommencer</motion.button>
                <a href="/calcul" className="btn-grad">Comprendre le score →</a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
