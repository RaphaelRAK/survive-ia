import type { Metadata } from 'next'
import Link from 'next/link'
import { metiers } from '@/lib/quiz-data'
import ShareButton from './share-button'

type Props = {
  searchParams: Promise<{ score?: string; metier?: string }>
}

function zoneInfo(indice: number) {
  if (indice <= 34) return { label: 'Safe Zone', color: '#16a34a' }
  if (indice <= 67) return { label: 'En Transition', color: '#d97706' }
  return { label: 'Attention Requise', color: '#dc2626' }
}

function titreFromScore(indice: number, metierLabel: string) {
  if (indice <= 34) return `En tant que ${metierLabel}, l'IA te fait surtout de la pub.`
  if (indice <= 67) return `${metierLabel} : certaines choses vont changer. C'est normal.`
  return `Certaines tâches de ${metierLabel} sont dans le viseur. Mais…`
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { score: scoreParam, metier: metierId } = await searchParams
  const indice = parseInt(scoreParam ?? '50', 10)
  const metier = metiers.find((m) => m.id === metierId)
  const zone = zoneInfo(indice)

  return {
    title: `${indice}/100 · ${metier?.label ?? 'Quiz IA'} · ${zone.label}`,
    description: `J'ai passé le quiz "L'IA va-t-elle me remplacer ?" — score ${indice}/100 · Zone : ${zone.label}. Et toi ?`,
    openGraph: {
      title: `${indice}/100 · ${metier?.label ?? 'Quiz IA'} · ${zone.label}`,
      description: `J'ai passé le quiz IA sur mon métier${metier ? ` (${metier.label})` : ''}. Score : ${indice}/100 — ${zone.label}. Fais le quiz !`,
      type: 'website',
    },
  }
}

export default async function ResultatPage({ searchParams }: Props) {
  const { score: scoreParam, metier: metierId } = await searchParams
  const indice = parseInt(scoreParam ?? '0', 10)
  const metier = metiers.find((m) => m.id === metierId)
  const zone = zoneInfo(isNaN(indice) ? 0 : indice)
  const metierLabel = metier?.label ?? 'ton métier'
  const titre = titreFromScore(isNaN(indice) ? 0 : indice, metierLabel)

  return (
    <div className="resultat-page">
      <div className="res-card">
        <div className="res-card-top">
          <Link href="/" className="mono res-card-brand">impact ia quiz</Link>
        </div>

        <div className="res-card-header">
          {metier && <span className="res-card-metier">{metier.label}</span>}
          <span className="res-card-zone mono" style={{ color: zone.color, borderColor: zone.color }}>
            {zone.label}
          </span>
        </div>

        <div className="res-card-score" style={{ color: zone.color }}>
          {isNaN(indice) ? '—' : indice}
          <span className="res-card-score-denom">/100</span>
        </div>

        <div className="res-card-bar">
          <div
            className="res-card-bar-fill"
            style={{ width: `${isNaN(indice) ? 0 : indice}%`, background: zone.color }}
          />
        </div>

        <p className="res-card-titre">{titre}</p>

        <div className="res-card-actions">
          {metier && (
            <ShareButton
              indice={isNaN(indice) ? 0 : indice}
              metierId={metier.id}
              metierLabel={metier.label}
              zoneLabel={zone.label}
            />
          )}
          <Link href="/quiz" className="btn-out">Faire le quiz</Link>
        </div>

        <p className="res-card-by">
          Par <strong>Raphaël Rakotonaivo</strong>
        </p>
      </div>
    </div>
  )
}
