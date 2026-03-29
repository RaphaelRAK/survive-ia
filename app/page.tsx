'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

const CAROUSEL_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1600&q=80',
    label: 'IA & Développement',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    label: 'Santé & Technologie',
  },
  {
    src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80',
    label: 'Design & Créativité',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    label: 'Analyse de données',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    label: 'Enseignement & Formation',
  },
  {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
    label: 'Management & Leadership',
  },
]

const STATS = [
  { value: 803, suffix: 'M', label: 'emplois analysés dans le rapport WEF 2025' },
  { value: 25, suffix: '+', label: 'sources officielles intégrées' },
  { value: 15, suffix: '', label: 'métiers couverts' },
  { value: 5, suffix: ' min', label: 'pour obtenir un résultat' },
]

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          let start: number | null = null
          const step = (ts: number) => {
            if (!start) start = ts
            const p = Math.min((ts - start) / duration, 1)
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * value))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="stat-counter" ref={ref}>
      <div className="stat-value">
        {count}<span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-desc">{label}</div>
    </div>
  )
}

function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.72s ease ${delay}ms, transform 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % CAROUSEL_IMAGES.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length), [])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(next, 4500)
    return () => clearTimeout(t)
  }, [current, paused, next])

  return (
    <section
      className="carousel-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-header">
        <Reveal>
          <h2>15 métiers, autant de réalités</h2>
          <p>Du développeur au médecin, découvrez comment l'IA transforme chaque secteur différemment</p>
        </Reveal>
      </div>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {CAROUSEL_IMAGES.map((img, i) => (
            <div key={i} className="carousel-slide">
              <img src={img.src} alt={img.label} loading={i === 0 ? 'eager' : 'lazy'} />
              <div className="carousel-caption">
                <span className="carousel-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Image précédente">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="carousel-btn carousel-next" onClick={next} aria-label="Image suivante">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="carousel-dots">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-progress" key={`progress-${current}-${paused}`}>
          {!paused && <div className="carousel-progress-fill" />}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section - Full Screen with entrance animations */}
      <section className="hero-fullscreen">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=80"
            alt="Intelligence artificielle et futur du travail"
          />
          <div className="hero-overlay"></div>
        </div>
        <header className="hero-nav hero-anim-nav">
          <span className="mono">impact ia quiz</span>
          <nav className="hero-nav-links">
            <Link href="/calcul">Calcul</Link>
            <Link href="/sources">Sources</Link>
            <Link href="/quiz" className="btn-grad">Lancer le quiz</Link>
          </nav>
        </header>
        <div className="hero-content">
          <h1 className="hero-main-title hero-anim-title">Quiz sur l'impact de l'IA par métier</h1>
          <Link href="/quiz" className="hero-cta hero-anim-cta">Faire le quiz maintenant</Link>
        </div>
      </section>

      {/* Subtitle */}
      <section className="intro-section">
        <div className="intro-container">
          <Reveal>
            <p className="intro-subtitle">
              Découvrez comment l'intelligence artificielle pourrait transformer votre profession.
              Un questionnaire personnalisé, des résultats basés sur des études officielles,
              une analyse claire de votre situation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats with count-up */}
      <section className="stats-section">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Alternating Content Sections */}
      <section className="content-sections">
        <div className="content-container">

          <Reveal as="article" className="content-section">
            <div className="content-media">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Équipe de travail collaborant"
              />
            </div>
            <div className="content-text">
              <h2>Un outil né de la curiosité</h2>
              <p>
                Ce quiz a commencé comme un projet personnel lors d'un moment d'ennui. L'idée était simple :
                créer un outil qui aide les professionnels à comprendre concrètement comment l'IA pourrait
                affecter leur métier, sans jargon technique ni prédictions alarmistes.
              </p>
              <p>
                Aujourd'hui, c'est devenu une ressource fiable basée sur des données officielles et des
                études récentes de grandes institutions internationales.
              </p>
            </div>
          </Reveal>

          <Reveal as="article" className="content-section reverse" delay={60}>
            <div className="content-text">
              <h2>Une méthodologie rigoureuse</h2>
              <p>
                Notre approche combine questionnaire personnalisé et analyse scientifique. Chaque métier
                est évalué selon ses spécificités : tâches automatisables, compétences créatives,
                interactions humaines et capacité d'adaptation technologique.
              </p>
              <p>
                Les résultats ne prétendent pas prédire l'avenir, mais offrent une estimation éclairée
                basée sur les tendances actuelles et les recherches en cours.
              </p>
            </div>
            <div className="content-media">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Analyse de données et graphiques"
              />
            </div>
          </Reveal>

          <Reveal as="article" className="content-section" delay={60}>
            <div className="content-media">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Graphiques et indicateurs de performance"
              />
            </div>
            <div className="content-text">
              <h2>Des sources vérifiables</h2>
              <p>
                Toutes nos analyses s'appuient sur des publications officielles : rapports du World Economic Forum,
                études de l'OCDE, recherches de l'Organisation Internationale du Travail, et travaux récents
                d'Anthropic sur l'impact sociétal de l'IA.
              </p>
              <p>
                Chaque résultat inclut les références permettant d'approfondir et de vérifier les informations
                fournies. Transparence totale, pas de boîte noire.
              </p>
            </div>
          </Reveal>

          <Reveal as="article" className="content-section reverse" delay={60}>
            <div className="content-text">
              <h2>Simple et rapide</h2>
              <p>
                Le quiz prend moins de 5 minutes à compléter. Les questions s'adaptent automatiquement à
                votre métier pour une analyse plus précise. Pas de création de compte, pas de données
                personnelles stockées.
              </p>
              <p>
                Vous obtenez immédiatement un score sur 100, une interprétation claire et des
                recommandations pratiques pour vous adapter aux évolutions technologiques.
              </p>
            </div>
            <div className="content-media">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
                alt="Interface simple et intuitive"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <Reveal as="section" className="final-cta">
        <div className="cta-container">
          <h2>Prêt à découvrir l'impact de l'IA sur votre métier ?</h2>
          <p>5 minutes pour une analyse personnalisée et des recommandations concrètes</p>
          <div className="cta-actions">
            <Link href="/quiz" className="btn-grad large">Commencer le quiz</Link>
            <Link href="/calcul" className="btn-out">Comment ça marche ?</Link>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <footer className="homepage-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-section">
              <h4>À propos du quiz</h4>
              <p>
                Ce quiz est entièrement anonyme. Nous collectons uniquement des statistiques d'usage anonymisées
                (pages vues, démarrage/fin de quiz, taux de complétion) pour améliorer l'expérience.
                Aucune donnée personnelle nominative n'est collectée ou stockée.
                L'outil a été créé pour le fun pendant un moment d'ennui et est maintenant disponible
                gratuitement pour tous.
              </p>
            </div>
            <div className="footer-section">
              <h4>Méthodologie</h4>
              <ul>
                <li><Link href="/calcul">Comment est calculé le score</Link></li>
                <li><Link href="/sources">Sources et références</Link></li>
                <li>Questions adaptées par métier</li>
                <li>Analyse basée sur des études officielles</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Mentions légales</h4>
              <ul>
                <li><a href="#conditions">Conditions d'utilisation</a></li>
                <li><a href="#confidentialite">Politique de confidentialité</a></li>
                <li>Quiz 100% anonyme</li>
                <li>Statistiques d'usage anonymes uniquement</li>
              </ul>
            </div>
          </div>
          <div className="footer-legal">
            <div id="conditions" className="footer-legal-block">
              <h5>Conditions d'utilisation</h5>
              <p>
                Ce quiz fournit une estimation informative et ne constitue pas un conseil juridique, RH ou
                financier. Les résultats sont indicatifs et basés sur des tendances générales.
              </p>
            </div>
            <div id="confidentialite" className="footer-legal-block">
              <h5>Politique de confidentialité</h5>
              <p>
                Nous collectons uniquement des données anonymes d'utilisation : nombre de visites, démarrages de
                quiz, taux de complétion, temps moyen et répartition des pages vues. Aucune information
                nominative n'est demandée.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="mono">Impact IA Quiz • Projet personnel • Gratuit et anonyme</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
