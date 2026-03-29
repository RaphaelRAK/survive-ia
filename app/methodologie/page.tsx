import Link from 'next/link'

const sources = [
  { title: 'WEF Future of Jobs Report 2025', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
  { title: 'OCDE - IA et marche du travail', url: 'https://www.oecd.org/fr/emploi/l-intelligence-artificielle-et-le-marche-du-travail.htm' },
  { title: 'OIT - Generative AI and Jobs', url: 'https://www.ilo.org/publications/generative-ai-and-jobs-global-analysis-potential-effects-job-quantity-and' },
  { title: 'OMS - AI for health', url: 'https://www.who.int/publications/i/item/9789240029200' },
  { title: 'EU AI Act', url: 'https://artificialintelligenceact.eu/' },
]

export default function MethodologiePage() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <span className="mono">methodologie</span>
        <nav className="landing-links">
          <Link href="/">Accueil</Link>
          <Link href="/quiz" className="btn-grad">Faire le quiz</Link>
        </nav>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <h1 className="hero-title">Comment le score du quiz est calcule</h1>
          <p className="hero-sub">Version courte: plus tes reponses montrent un poste repetitif et peu adaptable, plus le score de risque augmente.</p>
        </section>

        <section className="landing-grid">
          <article className="landing-card">
            <h3>1) Notation des reponses</h3>
            <p>Chaque question vaut entre 0 et 3 points. 0 signifie profil tres adaptable, 3 signifie forte exposition potentielle.</p>
          </article>
          <article className="landing-card">
            <h3>2) Normalisation</h3>
            <p>Le total est converti sur 100 pour garder une lecture stable, meme si le nombre de questions change.</p>
          </article>
          <article className="landing-card">
            <h3>3) Ajustement metier</h3>
            <p>Le score est ajuste selon le niveau structurel de risque du metier (faible, moyen, eleve).</p>
          </article>
        </section>

        <section className="conseil">
          <p className="mono conseil-lbl">Sources et verification</p>
          <div className="sources-list">
            {sources.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="source-link">
                {s.title}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
