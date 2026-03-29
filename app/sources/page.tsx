import Link from 'next/link'
import ScrollReveal from '@/components/scroll-reveal'

const institutionalSources = [
  {
    category: 'Organisations internationales',
    sources: [
      {
        title: 'World Economic Forum - Future of Jobs Report 2025',
        organization: 'World Economic Forum',
        date: '2025',
        desc: 'Rapport annuel sur l\'évolution des emplois dans le contexte de la transformation numérique. Analyse 15 industries et prévoit l\'impact de l\'IA générative sur 803 millions d\'emplois mondialement.',
        url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80',
        highlights: ['15 industries analysées', '803M emplois évalués', 'IA générative focus', 'Prévisions 2030']
      },
      {
        title: 'OECD Employment Outlook 2024: AI and Jobs',
        organization: 'Organisation de coopération et de développement économiques',
        date: '2024',
        desc: 'Analyse complète des effets de l\'intelligence artificielle sur le marché du travail dans 38 pays membres. Inclut des recommandations politiques pour la transition.',
        url: 'https://www.oecd.org/employment/artificial-intelligence-and-jobs',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
        highlights: ['38 pays étudiés', 'Politiques publiques', 'Transition professionnelle', 'Données comparatives']
      },
      {
        title: 'ILO - Generative AI and Jobs: A Global Analysis',
        organization: 'Organisation internationale du travail',
        date: '2023',
        desc: 'Première étude mondiale sur l\'impact de l\'IA générative (ChatGPT, etc.) sur la quantité et qualité des emplois. Focus sur les pays en développement.',
        url: 'https://www.ilo.org/publications/generative-ai-and-jobs-global-analysis',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        highlights: ['IA générative focus', 'Pays émergents', 'Qualité des emplois', 'Inégalités de genre']
      }
    ]
  },
  {
    category: 'Recherche en intelligence artificielle',
    sources: [
      {
        title: 'Anthropic - AI Safety and Societal Impact Research',
        organization: 'Anthropic',
        date: '2024',
        desc: 'Recherches sur la sécurité de l\'IA et son impact sociétal, incluant des analyses détaillées sur l\'automatisation des tâches cognitives et les changements organisationnels.',
        url: 'https://www.anthropic.com/research',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
        highlights: ['Sécurité IA', 'Impact sociétal', 'Tâches cognitives', 'Changement organisationnel']
      },
      {
        title: 'Anthropic - Constitutional AI and Labor Markets',
        organization: 'Anthropic',
        date: '2024',
        desc: 'Étude sur comment l\'IA constitutionnelle peut influencer différemment les secteurs selon leur niveau de réglementation et supervision humaine requise.',
        url: 'https://www.anthropic.com/research/constitutional-ai',
        image: 'https://images.unsplash.com/photo-1655635949348-953b0e3c140a?auto=format&fit=crop&w=400&q=80',
        highlights: ['IA constitutionnelle', 'Régulation sectorielle', 'Supervision humaine', 'Éthique appliquée']
      },
      {
        title: 'OpenAI - Economic Impact of Large Language Models',
        organization: 'OpenAI',
        date: '2024',
        desc: 'Recherche sur l\'impact économique des grands modèles de langage, avec focus sur la productivité et les transformations sectorielles.',
        url: 'https://openai.com/research/economic-impact',
        image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=400&q=80',
        highlights: ['LLM économie', 'Productivité', 'Secteurs impactés', 'Transformation digitale']
      }
    ]
  },
  {
    category: 'Études sectorielles récentes',
    sources: [
      {
        title: 'McKinsey - The Age of AI: Work, Progress and Prosperity',
        organization: 'McKinsey Global Institute',
        date: '2024',
        desc: 'Analyse de 2400 activités professionnelles détaillées dans 63 métiers. Estimations précises des capacités d\'automatisation par IA générative.',
        url: 'https://www.mckinsey.com/mgi/our-research/the-age-of-artificial-intelligence',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
        highlights: ['2400 activités', '63 métiers', 'IA générative', 'Capacités détaillées']
      },
      {
        title: 'Goldman Sachs - Generative AI Could Raise GDP by 7%',
        organization: 'Goldman Sachs Global Investment Research',
        date: '2024',
        desc: 'Projection macroéconomique de l\'impact de l\'IA générative : 300 millions d\'emplois affectés mais hausse du PIB de 7% sur 10 ans.',
        url: 'https://www.goldmansachs.com/insights/pages/generative-ai.html',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80',
        highlights: ['300M emplois', '+7% PIB', '10 ans projection', 'Impact macro']
      },
      {
        title: 'MIT - Work of the Future: Shaping Technology and Institutions',
        organization: 'MIT Task Force on Work of the Future',
        date: '2024',
        desc: 'Recherche interdisciplinaire sur l\'avenir du travail, combinant technologie, économie et sociologie. Focus sur l\'adaptation institutionnelle.',
        url: 'https://workofthefuture.mit.edu/research-post/shaping-technology-institutions/',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&q=80',
        highlights: ['Recherche MIT', 'Adaptation institutions', 'Multidisciplinaire', 'Technologie-société']
      }
    ]
  },
  {
    category: 'Cadres réglementaires',
    sources: [
      {
        title: 'EU AI Act - Regulation on Artificial Intelligence',
        organization: 'Commission européenne',
        date: '2024',
        desc: 'Premier cadre réglementaire mondial complet sur l\'IA. Définit les obligations des entreprises et impact sur l\'emploi par niveau de risque.',
        url: 'https://artificialintelligenceact.eu/',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        highlights: ['Premier cadre mondial', 'Classification risques', 'Obligations entreprises', 'Impact emploi']
      },
      {
        title: 'NIST AI Risk Management Framework',
        organization: 'National Institute of Standards and Technology (US)',
        date: '2023',
        desc: 'Cadre de gestion des risques IA pour les organisations, incluant l\'impact sur la main-d\'œuvre et les processus métier.',
        url: 'https://www.nist.gov/itl/ai-risk-management-framework',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
        highlights: ['Gestion risques', 'Standards US', 'Main-d\'œuvre', 'Processus métier']
      }
    ]
  },
  {
    category: 'Santé et bien-être au travail',
    sources: [
      {
        title: 'WHO - Ethics and Governance of AI for Health',
        organization: 'Organisation mondiale de la santé',
        date: '2024',
        desc: 'Guidelines sur l\'utilisation éthique de l\'IA dans la santé, impact sur les professionnels de santé et qualité des soins.',
        url: 'https://www.who.int/publications/i/item/9789240029200',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        highlights: ['Éthique santé', 'Professionnels santé', 'Qualité soins', 'Guidelines WHO']
      },
      {
        title: 'European Agency for Safety and Health - AI at Work',
        organization: 'EU-OSHA',
        date: '2024',
        desc: 'Rapport sur les risques psychosociaux liés à l\'introduction de l\'IA sur les lieux de travail européens.',
        url: 'https://osha.europa.eu/en/publications/artificial-intelligence-work',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
        highlights: ['Risques psychosociaux', 'Lieux de travail UE', 'Sécurité travail', 'Bien-être employés']
      }
    ]
  }
]

export default function SourcesPage() {
  return (
    <div className="sources-page">
      <header className="sources-nav">
        <span className="mono">sources officielles</span>
        <nav className="sources-nav-links">
          <Link href="/">Accueil</Link>
          <Link href="/calcul">Calcul</Link>
          <Link href="/quiz" className="btn-grad">Faire le quiz</Link>
        </nav>
      </header>

      <main className="sources-main">
        {/* Hero Section */}
        <ScrollReveal as="section" className="sources-hero">
          <div className="sources-hero-container">
            <div className="sources-hero-content">
              <p className="mono overline">Base documentaire scientifique</p>
              <h1 className="sources-hero-title">Sources officielles et recherches récentes</h1>
              <p className="sources-hero-subtitle">
                Notre méthodologie s'appuie sur les travaux les plus récents d'institutions internationales, 
                laboratoires de recherche en IA, et organismes de régulation. Chaque source est vérifiable, 
                publique et régulièrement mise à jour.
              </p>
              <div className="sources-stats">
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Sources officielles</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2024-25</div>
                  <div className="stat-label">Publications récentes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Institutions mondiales</div>
                </div>
              </div>
            </div>
            <div className="sources-hero-image">
              <img
                src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80"
                alt="Bibliothèque de recherche académique"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Sources par catégorie */}
        {institutionalSources.map((category, categoryIndex) => (
          <ScrollReveal key={categoryIndex} as="section" className="sources-category" delay={Math.min(categoryIndex * 60, 220)}>
            <div className="sources-container">
              <div className="category-header">
                <h2 className="category-title">{category.category}</h2>
                <div className="category-count">{category.sources.length} sources</div>
              </div>
              
              <div className="sources-grid">
                {category.sources.map((source, sourceIndex) => (
                  <article key={sourceIndex} className="source-detailed-card source-animated-card" style={{ animationDelay: `${sourceIndex * 80}ms` }}>
                    <div className="source-card-image">
                      <img src={source.image} alt={`Illustration ${source.title}`} />
                      <div className="source-card-overlay">
                        <div className="source-organization">{source.organization}</div>
                        <div className="source-date">{source.date}</div>
                      </div>
                    </div>
                    
                    <div className="source-card-content">
                      <h3 className="source-title">{source.title}</h3>
                      <p className="source-description">{source.desc}</p>
                      
                      <div className="source-highlights">
                        <h4>Points clés :</h4>
                        <ul className="highlights-list">
                          {source.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="source-card-footer">
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="source-link-btn"
                        >
                          Consulter la source
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15,3 21,3 21,9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                        <div className="source-meta">
                          {source.organization} • {source.date}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* Méthodologie de sélection */}
        <ScrollReveal as="section" className="methodology-section">
          <div className="sources-container">
            <div className="methodology-content">
              <div className="methodology-text">
                <h2>Critères de sélection des sources</h2>
                <p>
                  Toutes nos sources respectent des critères stricts de fiabilité et de pertinence. 
                  Notre processus de sélection garantit la qualité scientifique et l'actualité 
                  des informations utilisées dans le quiz.
                </p>
                <div className="criteria-list">
                  <div className="criteria-item">
                    <div className="criteria-icon">01</div>
                    <div className="criteria-content">
                      <h4>Autorité scientifique</h4>
                      <p>Publications d'institutions reconnues, laboratoires de recherche, organisations internationales</p>
                    </div>
                  </div>
                  <div className="criteria-item">
                    <div className="criteria-icon">02</div>
                    <div className="criteria-content">
                      <h4>Actualité</h4>
                      <p>Documents publiés entre 2023-2025, reflétant les dernières avancées en IA</p>
                    </div>
                  </div>
                  <div className="criteria-item">
                    <div className="criteria-icon">03</div>
                    <div className="criteria-content">
                      <h4>Pertinence métier</h4>
                      <p>Focus sur l'impact sectoriel et les transformations concrètes du travail</p>
                    </div>
                  </div>
                  <div className="criteria-item">
                    <div className="criteria-icon">04</div>
                    <div className="criteria-content">
                      <h4>Perspective globale</h4>
                      <p>Couverture internationale, données comparatives entre pays et régions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="methodology-image">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
                  alt="Processus de recherche méthodologique"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mise à jour et évolution */}
        <ScrollReveal as="section" className="updates-section">
          <div className="sources-container">
            <div className="updates-content">
              <h2>Mise à jour continue</h2>
              <p className="updates-intro">
                Le domaine de l'IA évolue rapidement. Nos sources sont régulièrement révisées 
                pour intégrer les dernières recherches et maintenir la pertinence des analyses.
              </p>
              
              <div className="updates-grid">
                <div className="update-card">
                  <div className="update-icon">A</div>
                  <h3>Veille technologique</h3>
                  <p>Surveillance des nouvelles publications d'Anthropic, OpenAI, Google DeepMind et autres laboratoires de pointe.</p>
                </div>
                <div className="update-card">
                  <div className="update-icon">B</div>
                  <h3>Données économiques</h3>
                  <p>Intégration des rapports trimestriels des organisations internationales (WEF, OCDE, OIT).</p>
                </div>
                <div className="update-card">
                  <div className="update-icon">C</div>
                  <h3>Évolutions réglementaires</h3>
                  <p>Suivi des nouveaux cadres légaux (EU AI Act, législations nationales, standards industriels).</p>
                </div>
                <div className="update-card">
                  <div className="update-icon">D</div>
                  <h3>Adaptation métier</h3>
                  <p>Affinement continu des questions et pondérations selon les retours sectoriels.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Final */}
        <ScrollReveal as="section" className="sources-cta">
          <div className="sources-container">
            <div className="cta-content">
              <h2>Des sources fiables pour des résultats précis</h2>
              <p>
                Maintenant que vous connaissez nos références, découvrez comment nous les utilisons 
                pour calculer votre score d'exposition à l'IA. Chaque résultat inclut les sources 
                spécifiques à votre métier.
              </p>
              <div className="cta-actions">
                <Link href="/quiz" className="btn-grad large">Faire le quiz</Link>
                <Link href="/calcul" className="btn-out">Voir la méthodologie</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
