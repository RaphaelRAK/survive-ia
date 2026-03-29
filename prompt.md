Tu es dans le projet Next.js situé dans ce dossier. Je veux créer un site web interactif deployable sur Vercel.

## Objectif
Un outil interactif fun et honnête : "L'IA va-t-elle vraiment me remplacer ?"
Partageable sur LinkedIn. Rassurer sans mentir, avec humour et vérité.

## Flow utilisateur
1. L'utilisateur choisit son métier parmi une liste
2. Il répond à 6 questions (certaines génériques, certaines adaptées au métier)
3. Il obtient un score + résultat personnalisé selon son métier

## Installe framer-motion si pas déjà présent

---

## MÉTIERS DISPONIBLES (minimum 12)

Voici les catégories et métiers à couvrir :

**Tech** : Développeur, Designer UX/UI, Data Analyst
**Business** : Commercial, Manager, RH, Comptable
**Créatif** : Graphiste, Rédacteur/Copywriter, Photographe
**Santé & Humain** : Médecin/Infirmier, Enseignant, Psychologue
**Artisanat & Terrain** : Artisan/Technicien, Chauffeur/Logistique

---

## STRUCTURE DES DONNÉES

Crée un fichier `lib/quiz-data.ts` avec cette structure :
```ts
type Metier = {
  id: string
  label: string
  emoji: string
  categorie: string
  // Questions spécifiques à ce métier (remplacent 2 questions génériques)
  questionsSpecifiques: Question[]
  // Contexte pour personnaliser le résultat
  contexte: {
    tachesAutomatisables: string // ex: "la saisie, les rapports, les relances"
    forcesHumaines: string // ex: "la relation client, la négociation, l'écoute"
    conseil: string // conseil spécifique au métier
    niveauRisque: 'faible' | 'moyen' | 'eleve' // influence le score de base
  }
}
```

Pour chaque métier, définis :
- 2 questions spécifiques au métier avec leurs scores
- Un contexte réaliste et honnête (pas catastrophiste, pas naïf)

---

## QUESTIONS GÉNÉRIQUES (4 questions communes à tous)

**Q1 🔧 "Tu utilises l'IA aujourd'hui ?"**
- Oui, c'est dans mon workflow quotidien → 0
- Parfois, je teste des trucs → 1
- J'ai essayé ChatGPT une fois → 2
- Non, et j'évite → 3

**Q2 🧠 "Face à un problème nouveau, tu…"**
- Cherche une solution créative → 0
- Suis un process établi → 2
- Demande à quelqu'un → 1
- Attends que ça se règle → 3

**Q3 🤝 "Le lien humain dans ton travail…"**
- Est central, c'est 80% de ma valeur → 0
- Est important mais pas vital → 1
- Est fonctionnel → 2
- Est quasi absent → 3

**Q4 📈 "Si ton poste disparaissait demain, tu…"**
- Aurais déjà un plan B → 0
- Te formerais rapidement → 1
- Paniquerais mais t'en sortirais → 2
- Serais perdu → 3

---

## QUESTIONS SPÉCIFIQUES PAR MÉTIER (exemples à compléter pour tous)

**Développeur :**
- Q: "Dans ton code quotidien, l'IA Copilot/Cursor…"
  - Me fait gagner 2h/jour, je m'adapte → 0
  - M'aide sur les parties chiantes → 1
  - Je l'utilise peu → 2
  - Je refuse de l'utiliser → 3
- Q: "Ta vraie valeur en tant que dev c'est…"
  - Comprendre le métier et traduire en solution → 0
  - Débugger et architecturer → 1
  - Écrire du code → 2
  - Suivre les tickets → 3

**Commercial :**
- Q: "Dans ta vente, ce qui fait la différence c'est…"
  - La confiance que j'inspire → 0
  - Mon argumentaire → 1
  - Le prix → 2
  - Le CRM fait le boulot → 3
- Q: "Tes relances clients aujourd'hui…"
  - Je les personnalise vraiment → 0
  - Je les adapte un peu → 1
  - C'est du copier-coller → 3
  - Je ne relance pas vraiment → 2

**[Génère des questions aussi pertinentes pour tous les autres métiers]**

---

## CALCUL DU SCORE

score_final = score_questions + bonus_metier

où bonus_metier :
- niveauRisque 'faible' → +0
- niveauRisque 'moyen' → +2
- niveauRisque 'eleve' → +4

---

## 3 RÉSULTATS (identiques pour tous, mais texte personnalisé avec le contexte du métier)

**Score 0-6 → 🏄 "Safe Zone" (vert #16a34a)**
Titre dynamique : "En tant que [métier], l'IA te fait surtout de la pub."
Texte : utilise `contexte.forcesHumaines` du métier
Conseil : utilise `contexte.conseil` du métier

**Score 7-12 → ⚡ "En Transition" (orange #d97706)**
Titre : "[métier] : certaines choses vont changer. C'est normal."
Texte : mentionne `contexte.tachesAutomatisables` + rassure sur l'adaptabilité
Conseil : spécifique au métier

**Score 13-22 → 🔄 "Attention Requise" (rouge #dc2626)**
Titre : "Certaines tâches de [métier] sont dans le viseur. Mais…"
Texte : honnête sur le risque + rappelle que l'adaptation est possible
Conseil : concret et actionnable

---

## BLOC "LA VRAIE VÉRITÉ" (identique pour tous les résultats)
"En 1900, 90% des Américains travaillaient dans l'agriculture. Aujourd'hui c'est 2%. Est-ce qu'il y a moins de travail ? Non. Plus d'emplois que jamais. La vraie menace c'est refuser de s'adapter."

---

## DESIGN

- Fond crème #fafaf7, texte #1a1a18
- Font : Instrument Serif (via `<link>` Google Fonts dans le head, PAS next/font/google)
- Font mono : JetBrains Mono (même approche)
- Style éditorial/print magazine. Zéro neon, zéro rounded cards, zéro AI-slop
- Animations Framer Motion :
  - Slide X entre les questions (AnimatePresence)
  - Barre de progression animée
  - Barre de score animée au résultat
  - whileHover x:4 sur les boutons réponse, whileTap scale:0.99

## ÉTAPE 1 : Sélection du métier
- Grille de métiers groupés par catégorie
- Chaque métier = card minimaliste avec emoji + label
- Hover subtil, sélection marquée avec border #1a1a18

## HEADER
- Gauche : "Raphaël Rakotonaivo" mono minuscule
- Droite : "Dev × IA" mono minuscule
- Border-bottom léger

## FOOTER
"Fait par un dev qui utilise l'IA tous les jours — et qui a encore son job."

## BOUTONS RÉSULTAT
- "Recommencer"
- "Mon portfolio →" → https://raphael-rakotonaivo.vercel.app

---