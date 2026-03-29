import Link from 'next/link'
import ScrollReveal from '@/components/scroll-reveal'

export default function CalculPage() {
  return (
    <div className="calcul-page">
      <header className="calcul-nav">
        <span className="mono">méthode de calcul</span>
        <nav className="calcul-nav-links">
          <Link href="/">Accueil</Link>
          <Link href="/sources">Sources</Link>
          <Link href="/quiz" className="btn-grad">Faire le quiz</Link>
        </nav>
      </header>

      <main className="calcul-main">
        {/* Hero Section */}
        <ScrollReveal as="section" className="calcul-hero">
          <div className="calcul-hero-container">
            <div className="calcul-hero-content">
              <p className="mono overline">Transparence totale</p>
              <h1 className="calcul-hero-title">Méthodologie détaillée du score IA</h1>
              <p className="calcul-hero-subtitle">
                Découvrez en détail comment votre score d'exposition à l'IA est calculé. 
                Notre méthodologie combine analyse comportementale, pondération sectorielle 
                et ajustements statistiques pour une évaluation précise et scientifique.
              </p>
            </div>
            <div className="calcul-hero-image">
              <img
                src="https://images.unsplash.com/photo-1551281044-8b4f1d9f0d9e?auto=format&fit=crop&w=800&q=80"
                alt="Tableaux de bord analytiques"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Vue d'ensemble */}
        <ScrollReveal as="section" className="calcul-overview">
          <div className="calcul-container">
            <div className="overview-header">
              <h2>Vue d'ensemble de l'algorithme</h2>
              <p>Le calcul suit un processus en 5 étapes distinctes pour garantir précision et reproductibilité</p>
            </div>
            <div className="overview-steps">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3>Collecte des réponses</h3>
                <p>Questions adaptées au métier avec notation progressive</p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <h3>Scoring individuel</h3>
                <p>Chaque réponse génère un score de 0 à 3 points</p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <h3>Normalisation</h3>
                <p>Conversion sur une échelle standardisée de 0 à 100</p>
              </div>
              <div className="step-card">
                <div className="step-number">04</div>
                <h3>Ajustement sectoriel</h3>
                <p>Pondération selon le niveau de risque du métier</p>
              </div>
              <div className="step-card">
                <div className="step-number">05</div>
                <h3>Score final</h3>
                <p>Résultat calibré avec interprétation contextuelle</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Détail Étape 1 */}
        <ScrollReveal as="section" className="calcul-detail">
          <div className="calcul-container">
            <div className="detail-content">
              <div className="detail-text">
                <span className="detail-badge">Étape 1</span>
                <h2>Collecte et catégorisation des réponses</h2>
                <p>
                  Le questionnaire se compose de 10 à 15 questions selon le métier choisi. 
                  Chaque question explore une dimension spécifique : automatisation des tâches, 
                  créativité requise, interactions humaines, complexité cognitive.
                </p>
                <div className="detail-specs">
                  <div className="spec-item">
                    <strong>Questions génériques :</strong>
                    <span>5 questions communes à tous les métiers</span>
                  </div>
                  <div className="spec-item">
                    <strong>Questions spécialisées :</strong>
                    <span>5-10 questions adaptées au secteur d'activité</span>
                  </div>
                  <div className="spec-item">
                    <strong>Échelle de réponse :</strong>
                    <span>4 options par question (de A à D)</span>
                  </div>
                </div>
                <div className="detail-formula">
                  <h4>Exemple de notation :</h4>
                  <code>
                    Option A = 0 point (faible exposition)<br/>
                    Option B = 1 point (exposition modérée)<br/>
                    Option C = 2 points (exposition élevée)<br/>
                    Option D = 3 points (exposition maximale)
                  </code>
                </div>
              </div>
              <div className="detail-image">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Interface de questionnaire avec options"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Détail Étape 2 */}
        <ScrollReveal as="section" className="calcul-detail reverse">
          <div className="calcul-container">
            <div className="detail-content">
              <div className="detail-image">
                <img
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
                  alt="Calculs mathématiques et algorithmes"
                />
              </div>
              <div className="detail-text">
                <span className="detail-badge">Étape 2</span>
                <h2>Calcul du score brut</h2>
                <p>
                  Une fois toutes les réponses collectées, nous calculons la somme totale des points. 
                  Cette somme constitue le "score brut" qui sera ensuite normalisé pour faciliter 
                  la comparaison entre différents questionnaires.
                </p>
                <div className="detail-formula">
                  <h4>Formule mathématique :</h4>
                  <code>
                    Score_Brut = Σ(Points_Question_i)<br/>
                    où i = 1 à N (nombre total de questions)
                  </code>
                </div>
                <div className="detail-example">
                  <h4>Exemple concret :</h4>
                  <p>
                    Pour un développeur web avec 12 questions :<br/>
                    • Questions 1-5 : 2+1+3+0+2 = 8 points<br/>
                    • Questions 6-12 : 1+3+2+1+0+2+1 = 10 points<br/>
                    • <strong>Score brut total : 18/36 points</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Détail Étape 3 */}
        <ScrollReveal as="section" className="calcul-detail">
          <div className="calcul-container">
            <div className="detail-content">
              <div className="detail-text">
                <span className="detail-badge">Étape 3</span>
                <h2>Normalisation sur 100</h2>
                <p>
                  Pour rendre les scores comparables quel que soit le nombre de questions, 
                  nous normalisons le score brut sur une échelle de 0 à 100. Cette étape 
                  garantit l'équité entre différents métiers.
                </p>
                <div className="detail-formula">
                  <h4>Formule de normalisation :</h4>
                  <code>
                    Score_Normalisé = (Score_Brut / Score_Maximum) × 100<br/>
                    où Score_Maximum = Nombre_Questions × 3
                  </code>
                </div>
                <div className="detail-example">
                  <h4>Application de l'exemple précédent :</h4>
                  <p>
                    • Score brut : 18 points<br/>
                    • Score maximum possible : 12 × 3 = 36 points<br/>
                    • Score normalisé : (18/36) × 100 = <strong>50/100</strong>
                  </p>
                </div>
                <div className="detail-interpretation">
                  <h4>Interprétation des tranches :</h4>
                  <div className="interpretation-grid">
                    <div className="interp-item low">
                      <span className="interp-range">0-30</span>
                      <span className="interp-label">Exposition faible</span>
                    </div>
                    <div className="interp-item medium">
                      <span className="interp-range">31-60</span>
                      <span className="interp-label">Exposition modérée</span>
                    </div>
                    <div className="interp-item high">
                      <span className="interp-range">61-100</span>
                      <span className="interp-label">Exposition élevée</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-image">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Graphiques de normalisation statistique"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Détail Étape 4 */}
        <ScrollReveal as="section" className="calcul-detail reverse">
          <div className="calcul-container">
            <div className="detail-content">
              <div className="detail-image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Analyse sectorielle par industrie"
                />
              </div>
              <div className="detail-text">
                <span className="detail-badge">Étape 4</span>
                <h2>Ajustement par niveau de risque sectoriel</h2>
                <p>
                  Chaque métier possède un "niveau de risque structurel" basé sur les études sectorielles. 
                  Cet ajustement affine le score en tenant compte des spécificités économiques 
                  et technologiques de chaque domaine.
                </p>
                <div className="detail-specs">
                  <div className="spec-item">
                    <strong>Risque faible :</strong>
                    <span>Métiers à fort contenu humain/créatif (coefficient 0.85-0.95)</span>
                  </div>
                  <div className="spec-item">
                    <strong>Risque modéré :</strong>
                    <span>Métiers mixtes techniques/humains (coefficient 0.95-1.05)</span>
                  </div>
                  <div className="spec-item">
                    <strong>Risque élevé :</strong>
                    <span>Métiers très automatisables (coefficient 1.05-1.15)</span>
                  </div>
                </div>
                <div className="detail-formula">
                  <h4>Calcul de l'ajustement :</h4>
                  <code>
                    Coefficient_Métier = Base_Risque × Facteur_Adaptation<br/>
                    Score_Ajusté = Score_Normalisé × Coefficient_Métier
                  </code>
                </div>
                <div className="detail-example">
                  <h4>Exemples de coefficients :</h4>
                  <p>
                    • Développeur web : 1.08 (risque élevé)<br/>
                    • Infirmier : 0.92 (risque faible)<br/>
                    • Comptable : 1.12 (risque élevé)<br/>
                    • Designer UX : 0.89 (risque faible)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Détail Étape 5 */}
        <ScrollReveal as="section" className="calcul-detail">
          <div className="calcul-container">
            <div className="detail-content">
              <div className="detail-text">
                <span className="detail-badge">Étape 5</span>
                <h2>Score final et interprétation</h2>
                <p>
                  Le score final combine toutes les étapes précédentes. Il est accompagné d'une 
                  interprétation contextualisée et de recommandations personnalisées selon 
                  le métier et le niveau de risque identifié.
                </p>
                <div className="detail-formula">
                  <h4>Score final :</h4>
                  <code>
                    Score_Final = min(100, max(0, Score_Ajusté))<br/>
                    Borné entre 0 et 100 pour cohérence
                  </code>
                </div>
                <div className="score-breakdown">
                  <h4>Composantes du résultat :</h4>
                  <div className="breakdown-grid">
                    <div className="breakdown-item">
                      <div className="breakdown-icon">01</div>
                      <div>
                        <h5>Score numérique</h5>
                        <p>Valeur de 0 à 100</p>
                      </div>
                    </div>
                    <div className="breakdown-item">
                      <div className="breakdown-icon">02</div>
                      <div>
                        <h5>Interprétation textuelle</h5>
                        <p>Analyse qualitative du score</p>
                      </div>
                    </div>
                    <div className="breakdown-item">
                      <div className="breakdown-icon">03</div>
                      <div>
                        <h5>Recommandations</h5>
                        <p>Conseils d'adaptation personnalisés</p>
                      </div>
                    </div>
                    <div className="breakdown-item">
                      <div className="breakdown-icon">04</div>
                      <div>
                        <h5>Sources officielles</h5>
                        <p>Références pour approfondir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-image">
                <img
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80"
                  alt="Dashboard de résultats et métriques"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Validation et limites */}
        <ScrollReveal as="section" className="calcul-validation">
          <div className="calcul-container">
            <div className="validation-header">
              <h2>Validation et limites de la méthode</h2>
              <p>Transparence sur les aspects méthodologiques et les biais potentiels</p>
            </div>
            <div className="validation-grid">
              <div className="validation-card">
                <div className="validation-icon">OK</div>
                <h3>Forces de l'approche</h3>
                <ul>
                  <li>Basée sur des études officielles récentes</li>
                  <li>Questions adaptées par métier</li>
                  <li>Normalisation pour comparabilité</li>
                  <li>Ajustement sectoriel scientifique</li>
                  <li>Transparence totale de l'algorithme</li>
                </ul>
              </div>
              <div className="validation-card">
                <div className="validation-icon">INFO</div>
                <h3>Limites à considérer</h3>
                <ul>
                  <li>Basé sur les tendances actuelles (évolution rapide)</li>
                  <li>Auto-évaluation subjective des répondants</li>
                  <li>Simplification des nuances métier</li>
                  <li>Prédiction à horizon 5-10 ans maximum</li>
                  <li>Ne remplace pas le conseil professionnel</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Final */}
        <ScrollReveal as="section" className="calcul-cta">
          <div className="calcul-container">
            <div className="cta-content">
              <h2>Prêt à découvrir votre score ?</h2>
              <p>
                Maintenant que vous comprenez la méthodologie, testez l'algorithme 
                avec vos propres données. Le quiz prend 5 minutes et génère 
                un rapport détaillé avec sources.
              </p>
              <div className="cta-actions">
                <Link href="/quiz" className="btn-grad large">Faire le quiz maintenant</Link>
                <Link href="/sources" className="btn-out">Consulter les sources</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
