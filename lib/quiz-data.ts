export type Question = {
  id: string
  emoji: string
  question: string
  options: { label: string; score: number }[]
}

export type Metier = {
  id: string
  label: string
  emoji: string
  categorie: string
  questionsSpecifiques: Question[]
  contexte: {
    tachesAutomatisables: string
    forcesHumaines: string
    conseil: string
    niveauRisque: 'faible' | 'moyen' | 'eleve'
  }
}

export const questionsGeneriques: Question[] = [
  {
    id: 'gen-1',
    emoji: '',
    question: "Tu utilises l'IA aujourd'hui ?",
    options: [
      { label: "Oui, c'est dans mon workflow quotidien", score: 0 },
      { label: 'Parfois, je teste des trucs', score: 1 },
      { label: "J'ai essayé ChatGPT une fois", score: 2 },
      { label: "Non, et j'évite", score: 3 },
    ],
  },
  {
    id: 'gen-2',
    emoji: '',
    question: 'Face à un problème nouveau, tu…',
    options: [
      { label: 'Cherches une solution créative', score: 0 },
      { label: "Demandes à quelqu'un", score: 1 },
      { label: 'Suis un process établi', score: 2 },
      { label: 'Attends que ça se règle', score: 3 },
    ],
  },
  {
    id: 'gen-3',
    emoji: '',
    question: 'Le lien humain dans ton travail…',
    options: [
      { label: "Est central, c'est 80% de ma valeur", score: 0 },
      { label: 'Est important mais pas vital', score: 1 },
      { label: 'Est fonctionnel', score: 2 },
      { label: 'Est quasi absent', score: 3 },
    ],
  },
  {
    id: 'gen-4',
    emoji: '',
    question: 'Si ton poste disparaissait demain, tu…',
    options: [
      { label: 'Aurais déjà un plan B', score: 0 },
      { label: 'Te formerais rapidement', score: 1 },
      { label: "Paniquerais mais t'en sortirais", score: 2 },
      { label: 'Serais perdu', score: 3 },
    ],
  },
]

export const metiers: Metier[] = [
  // ─── Tech ───────────────────────────────────────────────────
  {
    id: 'dev',
    label: 'Développeur',
    emoji: '',
    categorie: 'Tech',
    questionsSpecifiques: [
      {
        id: 'dev-1',
        emoji: '',
        question: 'Les outils IA dans ton code quotidien (Copilot, Cursor)…',
        options: [
          { label: "Me font gagner 2h/jour, je m'adapte", score: 0 },
          { label: "M'aident sur les parties chiantes", score: 1 },
          { label: 'Je les utilise peu', score: 2 },
          { label: 'Je refuse de les utiliser', score: 3 },
        ],
      },
      {
        id: 'dev-2',
        emoji: '',
        question: "Ta vraie valeur en tant que dev c'est…",
        options: [
          { label: 'Comprendre le métier et traduire en solution', score: 0 },
          { label: 'Débugger et architecturer', score: 1 },
          { label: 'Écrire du code propre', score: 2 },
          { label: 'Fermer des tickets', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'la génération de boilerplate, les tests unitaires, la documentation',
      forcesHumaines: "l'architecture, la compréhension métier, le debugging complexe, la communication avec les équipes",
      conseil: 'Maîtrise les outils IA (Cursor, Copilot, Claude). Les devs qui les utilisent sont 2× plus productifs.',
      niveauRisque: 'moyen',
    },
  },
  {
    id: 'design',
    label: 'Designer UX/UI',
    emoji: '',
    categorie: 'Tech',
    questionsSpecifiques: [
      {
        id: 'design-1',
        emoji: '',
        question: "Pour toi, un bon design c'est avant tout…",
        options: [
          { label: 'Résoudre un vrai problème utilisateur', score: 0 },
          { label: 'Être esthétiquement fort et mémorable', score: 1 },
          { label: 'Respecter les design systems', score: 2 },
          { label: 'Suivre fidèlement le brief', score: 3 },
        ],
      },
      {
        id: 'design-2',
        emoji: '',
        question: 'Tu fais de la recherche utilisateur…',
        options: [
          { label: "Régulièrement, c'est le cœur de mon travail", score: 0 },
          { label: 'Parfois, quand on a le budget', score: 1 },
          { label: 'Rarement, on présume des besoins', score: 2 },
          { label: 'Jamais vraiment', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'la génération de maquettes basiques, les ajustements de style, les exports assets',
      forcesHumaines: "la recherche utilisateur, l'empathie, la stratégie de design, la facilitation d'ateliers",
      conseil: "Apprends à utiliser l'IA pour prototyper plus vite. Ton œil critique et ta compréhension humaine restent irremplaçables.",
      niveauRisque: 'moyen',
    },
  },
  {
    id: 'data',
    label: 'Data Analyst',
    emoji: '',
    categorie: 'Tech',
    questionsSpecifiques: [
      {
        id: 'data-1',
        emoji: '',
        question: "Dans ton analyse, ce qui a le plus de valeur c'est…",
        options: [
          { label: 'Transformer les données en décisions business', score: 0 },
          { label: 'Construire des modèles prédictifs', score: 1 },
          { label: 'Créer des dashboards lisibles', score: 2 },
          { label: 'Extraire et nettoyer les données', score: 3 },
        ],
      },
      {
        id: 'data-2',
        emoji: '',
        question: 'Tes rapports récurrents…',
        options: [
          { label: "Sont automatisés, je me concentre sur l'analyse", score: 0 },
          { label: 'Je les ai partiellement automatisés', score: 1 },
          { label: 'Je les refais manuellement chaque semaine', score: 2 },
          { label: 'Prennent la majorité de mon temps', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'les rapports récurrents, les dashboards standards, les analyses descriptives basiques',
      forcesHumaines: "l'interprétation des données, le storytelling, les recommandations business, la définition des bonnes questions",
      conseil: "Développe ta capacité à raconter des histoires avec les données. L'IA peut générer des graphiques, pas des insights.",
      niveauRisque: 'eleve',
    },
  },

  // ─── Business ────────────────────────────────────────────────
  {
    id: 'commercial',
    label: 'Commercial',
    emoji: '',
    categorie: 'Business',
    questionsSpecifiques: [
      {
        id: 'commercial-1',
        emoji: '',
        question: "Dans ta vente, ce qui fait la différence c'est…",
        options: [
          { label: "La confiance que j'inspire", score: 0 },
          { label: 'Mon argumentaire', score: 1 },
          { label: 'Le prix', score: 2 },
          { label: 'Le CRM fait le boulot', score: 3 },
        ],
      },
      {
        id: 'commercial-2',
        emoji: '',
        question: 'Tes relances clients…',
        options: [
          { label: 'Je les personnalise vraiment', score: 0 },
          { label: 'Je les adapte un peu', score: 1 },
          { label: 'Je ne relance pas vraiment', score: 2 },
          { label: "C'est du copier-coller", score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'la saisie CRM, les relances automatiques, les rapports de pipeline',
      forcesHumaines: 'la relation de confiance, la négociation, la lecture des signaux humains, la fidélisation',
      conseil: "Utilise l'IA pour préparer tes RDV et personnaliser tes pitchs. Le reste, c'est toi.",
      niveauRisque: 'faible',
    },
  },
  {
    id: 'manager',
    label: 'Manager',
    emoji: '',
    categorie: 'Business',
    questionsSpecifiques: [
      {
        id: 'manager-1',
        emoji: '',
        question: "Ton rôle principal en tant que manager c'est…",
        options: [
          { label: 'Développer les personnes et débloquer', score: 0 },
          { label: 'Coordonner et prioriser', score: 1 },
          { label: 'Faire des réunions et des reportings', score: 2 },
          { label: 'Contrôler que les tâches avancent', score: 3 },
        ],
      },
      {
        id: 'manager-2',
        emoji: '',
        question: 'Quand un conflit éclate dans ton équipe…',
        options: [
          { label: 'Je facilite le dialogue et on trouve une solution', score: 0 },
          { label: "J'interviens après un moment", score: 1 },
          { label: 'Je laisse le temps faire', score: 2 },
          { label: "J'escalade à la hiérarchie", score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'les reportings, la planification, le suivi des KPIs, certaines réunions de statut',
      forcesHumaines: "le développement des talents, la gestion des conflits, l'inspiration, la prise de décision en incertitude",
      conseil: "L'IA peut gérer tes reportings. Investis le temps gagné dans les conversations humaines.",
      niveauRisque: 'faible',
    },
  },
  {
    id: 'rh',
    label: 'RH',
    emoji: '',
    categorie: 'Business',
    questionsSpecifiques: [
      {
        id: 'rh-1',
        emoji: '',
        question: "Dans tes missions RH, ce que tu préfères c'est…",
        options: [
          { label: 'Accompagner les personnes dans leur développement', score: 0 },
          { label: 'Recruter et repérer les talents', score: 1 },
          { label: 'Gérer les processus et la conformité', score: 2 },
          { label: "Gérer l'admin et la paie", score: 3 },
        ],
      },
      {
        id: 'rh-2',
        emoji: '',
        question: 'Ton processus de recrutement…',
        options: [
          { label: "Intègre l'humain et la culture avant tout", score: 0 },
          { label: 'Mixe outils et intuition', score: 1 },
          { label: 'Suit un process standardisé', score: 2 },
          { label: "C'est surtout du tri de CVs", score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: "le tri de CVs, la planification d'entretiens, les onboardings administratifs, les déclarations",
      forcesHumaines: "l'accompagnement humain, la culture d'entreprise, la détection des talents, la médiation",
      conseil: "L'IA va automatiser le tri des CVs. Repositionne-toi sur l'évaluation culturelle et le développement.",
      niveauRisque: 'moyen',
    },
  },
  {
    id: 'comptable',
    label: 'Comptable',
    emoji: '',
    categorie: 'Business',
    questionsSpecifiques: [
      {
        id: 'comptable-1',
        emoji: '',
        question: "Ta valeur principale en comptabilité c'est…",
        options: [
          { label: 'Le conseil financier et la stratégie', score: 0 },
          { label: "L'analyse et l'interprétation des comptes", score: 1 },
          { label: 'La conformité et les déclarations', score: 2 },
          { label: 'La saisie et la vérification', score: 3 },
        ],
      },
      {
        id: 'comptable-2',
        emoji: '',
        question: 'Les tâches répétitives (saisie, rapprochements)…',
        options: [
          { label: 'Sont automatisées dans mon workflow', score: 0 },
          { label: 'Je les automatise progressivement', score: 1 },
          { label: 'Je les fais encore manuellement', score: 2 },
          { label: "C'est l'essentiel de mon temps", score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'la saisie, les rapprochements bancaires, les déclarations de routine, les rapports standards',
      forcesHumaines: 'le conseil fiscal, la stratégie financière, la relation client, le jugement sur des cas complexes',
      conseil: "Développe tes compétences en conseil. L'IA va absorber la saisie — c'est une opportunité de monter en gamme.",
      niveauRisque: 'eleve',
    },
  },

  // ─── Créatif ─────────────────────────────────────────────────
  {
    id: 'graphiste',
    label: 'Graphiste',
    emoji: '',
    categorie: 'Créatif',
    questionsSpecifiques: [
      {
        id: 'graphiste-1',
        emoji: '',
        question: "L'IA générative (Midjourney, Firefly)…",
        options: [
          { label: "Est dans mon workflow, ça accélère tout", score: 0 },
          { label: "Je l'utilise pour explorer des idées", score: 1 },
          { label: "Je l'ai testée sans vraiment l'adopter", score: 2 },
          { label: 'Je refuse — ça dilue mon métier', score: 3 },
        ],
      },
      {
        id: 'graphiste-2',
        emoji: '',
        question: "Ta vraie valeur en tant que graphiste c'est…",
        options: [
          { label: 'La direction créative et le concept', score: 0 },
          { label: "Le style et l'exécution", score: 1 },
          { label: 'La maîtrise des outils', score: 2 },
          { label: 'Livrer dans les délais', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'les déclinaisons, les retouches basiques, la génération de variations, les exports',
      forcesHumaines: 'la direction artistique, le concept, le sens du contexte culturel, la relation client',
      conseil: "Utilise l'IA générative comme un outil d'exploration. Ton brief, ton concept, ton œil — ça, l'IA ne peut pas.",
      niveauRisque: 'moyen',
    },
  },
  {
    id: 'redacteur',
    label: 'Rédacteur / Copywriter',
    emoji: '',
    categorie: 'Créatif',
    questionsSpecifiques: [
      {
        id: 'redacteur-1',
        emoji: '',
        question: "L'IA dans ton écriture…",
        options: [
          { label: 'Est un outil que je dirige et affine', score: 0 },
          { label: "M'aide sur les premières ébauches", score: 1 },
          { label: "Je l'évite pour garder mon style", score: 2 },
          { label: 'Menace directement mon job', score: 3 },
        ],
      },
      {
        id: 'redacteur-2',
        emoji: '',
        question: "Ce qui différencie tes textes c'est…",
        options: [
          { label: 'Un point de vue, une voix unique', score: 0 },
          { label: 'La structure et la persuasion', score: 1 },
          { label: 'La correction et le respect du brief', score: 2 },
          { label: 'La vitesse de production', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'les textes SEO génériques, les descriptions produit, les premières ébauches',
      forcesHumaines: "la voix de marque, le point de vue éditorial, l'humour, la nuance culturelle, l'émotion",
      conseil: "Développe une voix. Ce qui est générique sera automatisé. Ce qui est toi ne le sera jamais.",
      niveauRisque: 'eleve',
    },
  },
  {
    id: 'photographe',
    label: 'Photographe',
    emoji: '',
    categorie: 'Créatif',
    questionsSpecifiques: [
      {
        id: 'photographe-1',
        emoji: '',
        question: "L'IA dans la photo (retouche auto, génération)…",
        options: [
          { label: "J'utilise ces outils pour aller plus vite", score: 0 },
          { label: 'Je teste certains outils', score: 1 },
          { label: 'Je reste sur mes méthodes', score: 2 },
          { label: "C'est une menace pour mon métier", score: 3 },
        ],
      },
      {
        id: 'photographe-2',
        emoji: '',
        question: "Ta valeur de photographe c'est…",
        options: [
          { label: 'La direction artistique et la mise en scène', score: 0 },
          { label: "L'œil et la capture du moment", score: 1 },
          { label: 'La maîtrise technique', score: 2 },
          { label: 'La post-production', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'la retouche basique, le tri des photos, les recadrages, certaines photos de stock',
      forcesHumaines: 'la mise en scène, la direction humaine, la présence sur le terrain, le regard unique',
      conseil: "Spécialise-toi dans ce que l'IA ne peut pas : l'émotion in situ, la confiance avec les sujets.",
      niveauRisque: 'moyen',
    },
  },

  // ─── Santé & Humain ──────────────────────────────────────────
  {
    id: 'medecin',
    label: 'Médecin / Infirmier',
    emoji: '',
    categorie: 'Santé & Humain',
    questionsSpecifiques: [
      {
        id: 'medecin-1',
        emoji: '',
        question: "Dans ta pratique, l'IA d'aide au diagnostic…",
        options: [
          { label: "Est un outil de plus, je garde mon jugement", score: 0 },
          { label: 'Je la suis avec vérification', score: 1 },
          { label: "Je n'y fais pas confiance", score: 2 },
          { label: "Je ne l'utilise pas du tout", score: 2 },
        ],
      },
      {
        id: 'medecin-2',
        emoji: '',
        question: 'La relation avec tes patients…',
        options: [
          { label: "Est centrale, c'est là que je soigne vraiment", score: 0 },
          { label: 'Est importante mais secondaire au soin technique', score: 1 },
          { label: 'Est fonctionnelle', score: 2 },
          { label: 'Me prend trop de temps', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: "la saisie administrative, l'aide au diagnostic sur des cas standards, certains dépistages",
      forcesHumaines: "le jugement clinique en situation complexe, l'empathie, l'annonce, la décision thérapeutique",
      conseil: "Laisse l'IA gérer l'admin. Investis ce temps dans la relation thérapeutique — c'est là que tu guéris.",
      niveauRisque: 'faible',
    },
  },
  {
    id: 'enseignant',
    label: 'Enseignant',
    emoji: '',
    categorie: 'Santé & Humain',
    questionsSpecifiques: [
      {
        id: 'enseignant-1',
        emoji: '',
        question: "Dans ta classe, les outils pédagogiques IA…",
        options: [
          { label: "M'aident à personnaliser l'apprentissage", score: 0 },
          { label: "J'expérimente parfois", score: 1 },
          { label: 'Je reste sur mes méthodes éprouvées', score: 2 },
          { label: "Je m'y oppose", score: 3 },
        ],
      },
      {
        id: 'enseignant-2',
        emoji: '',
        question: "Ta valeur d'enseignant c'est…",
        options: [
          { label: "Inspirer et donner le goût d'apprendre", score: 0 },
          { label: 'Transmettre les connaissances', score: 1 },
          { label: 'Évaluer et noter', score: 2 },
          { label: "Gérer le programme et l'admin", score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: 'les corrections, la préparation de cours standards, les exercices répétitifs, le suivi administratif',
      forcesHumaines: "l'inspiration, la relation éducative, la gestion du groupe, l'adaptation aux besoins de chaque élève",
      conseil: "Utilise l'IA pour préparer et corriger. Libère du temps pour ce que tu es seul à pouvoir faire : être présent.",
      niveauRisque: 'faible',
    },
  },
  {
    id: 'psy',
    label: 'Psychologue',
    emoji: '',
    categorie: 'Santé & Humain',
    questionsSpecifiques: [
      {
        id: 'psy-1',
        emoji: '',
        question: 'Des outils IA pour soutenir la santé mentale…',
        options: [
          { label: 'Je les intègre comme complément entre les séances', score: 0 },
          { label: "J'y suis ouvert avec précaution", score: 1 },
          { label: 'Je suis sceptique', score: 2 },
          { label: "C'est dangereux", score: 2 },
        ],
      },
      {
        id: 'psy-2',
        emoji: '',
        question: 'La thérapie fonctionne parce que…',
        options: [
          { label: "La relation de confiance est le soin lui-même", score: 0 },
          { label: 'Les techniques sont bien appliquées', score: 1 },
          { label: 'Le patient veut changer', score: 1 },
          { label: "Les séances s'accumulent", score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: "les prises de notes, certains exercices entre séances, les rappels, la psychoéducation standardisée",
      forcesHumaines: "la relation thérapeutique, l'empathie, l'interprétation, la présence, le cadre sécurisant",
      conseil: "La relation thérapeutique est le mécanisme de soin. C'est humain par définition. Reste là.",
      niveauRisque: 'faible',
    },
  },

  // ─── Artisanat & Terrain ─────────────────────────────────────
  {
    id: 'artisan',
    label: 'Artisan / Technicien',
    emoji: '',
    categorie: 'Artisanat & Terrain',
    questionsSpecifiques: [
      {
        id: 'artisan-1',
        emoji: '',
        question: 'Dans ton métier, les outils connectés et automatisés…',
        options: [
          { label: "Je les utilise pour aller plus vite et mieux", score: 0 },
          { label: "J'en utilise quelques-uns", score: 1 },
          { label: 'Mon métier reste manuel par nature', score: 2 },
          { label: "Je m'y oppose", score: 3 },
        ],
      },
      {
        id: 'artisan-2',
        emoji: '',
        question: "Ce qui fait ta valeur c'est…",
        options: [
          { label: "L'expertise et le diagnostic sur le terrain", score: 0 },
          { label: "La qualité d'exécution", score: 1 },
          { label: 'La vitesse', score: 2 },
          { label: 'Suivre les procédures', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: "certaines tâches répétitives, la planification, la commande de matériaux, le suivi administratif",
      forcesHumaines: "le diagnostic terrain, l'adaptation aux imprévus, le savoir-faire manuel, la relation client",
      conseil: "L'expertise terrain et le savoir-faire manuel sont difficiles à automatiser. Renforce ton diagnostic.",
      niveauRisque: 'faible',
    },
  },
  {
    id: 'chauffeur',
    label: 'Chauffeur / Logistique',
    emoji: '',
    categorie: 'Artisanat & Terrain',
    questionsSpecifiques: [
      {
        id: 'chauffeur-1',
        emoji: '',
        question: 'Les véhicules autonomes et la logistique automatisée…',
        options: [
          { label: "Je développe d'autres compétences en parallèle", score: 0 },
          { label: "Ça m'inquiète, je réfléchis à ma reconversion", score: 1 },
          { label: "C'est encore loin, j'attends", score: 2 },
          { label: "Je n'y crois pas", score: 3 },
        ],
      },
      {
        id: 'chauffeur-2',
        emoji: '',
        question: "Dans la logistique, ta valeur c'est…",
        options: [
          { label: "L'optimisation et la gestion des imprévus", score: 0 },
          { label: 'La relation avec les clients et les livreurs', score: 1 },
          { label: 'Respecter les délais', score: 2 },
          { label: 'Conduire / livrer les colis', score: 3 },
        ],
      },
    ],
    contexte: {
      tachesAutomatisables: "les livraisons standardisées sur courtes distances, l'optimisation des routes, le suivi des commandes",
      forcesHumaines: "la gestion des imprévus, la relation client, les environments complexes, la coordination humaine",
      conseil: "Ce secteur va changer. Développe des compétences en gestion logistique, coordination ou relation client maintenant.",
      niveauRisque: 'eleve',
    },
  },
]

export const categorieOrder = ['Tech', 'Business', 'Créatif', 'Santé & Humain', 'Artisanat & Terrain']

export function getScoreResult(score: number, metier: Metier, maxScore = 18) {
  const safeMax = Math.max(1, maxScore)
  const baseRatio = score / safeMax
  const riskShift = metier.contexte.niveauRisque === 'faible' ? 0 : metier.contexte.niveauRisque === 'moyen' ? 0.07 : 0.12
  const finalRatio = Math.min(1, baseRatio + riskShift)
  const indice = Math.round(finalRatio * 100)

  if (finalRatio <= 0.34) {
    return {
      zone: 'safe' as const,
      emoji: '',
      label: 'Safe Zone',
      color: '#16a34a',
      titre: `En tant que ${metier.label}, l'IA te fait surtout de la pub.`,
      sousTitre: "Sérieusement, t'as rien à craindre.",
      texte: `Tu t'appuies sur ${metier.contexte.forcesHumaines}. L'IA va te libérer du temps — pas te voler ta place. T'es exactement le profil qui va surfer sur la vague plutôt que se noyer dedans.`,
      conseil: metier.contexte.conseil,
      indice,
    }
  } else if (finalRatio <= 0.67) {
    return {
      zone: 'transition' as const,
      emoji: '',
      label: 'En Transition',
      color: '#d97706',
      titre: `${metier.label} : certaines choses vont changer. C'est normal.`,
      sousTitre: "Mais toi, t'es toujours là.",
      texte: `Une partie de ce que tu fais — ${metier.contexte.tachesAutomatisables} — peut s'automatiser. Mais c'est vrai pour 100% des métiers depuis 200 ans. La vraie question : tu te formes ou tu attends ?`,
      conseil: metier.contexte.conseil,
      indice,
    }
  } else {
    return {
      zone: 'attention' as const,
      emoji: '',
      label: 'Attention Requise',
      color: '#dc2626',
      titre: `Certaines tâches de ${metier.label} sont dans le viseur. Mais…`,
      sousTitre: "Ce n'est pas une condamnation.",
      texte: `${metier.contexte.tachesAutomatisables.charAt(0).toUpperCase() + metier.contexte.tachesAutomatisables.slice(1)} — tout ça va changer drastiquement. Mais l'histoire montre que chaque révolution crée plus d'emplois qu'elle n'en détruit, à condition de s'adapter. La vraie menace c'est l'immobilisme.`,
      conseil: metier.contexte.conseil,
      indice,
    }
  }
}
