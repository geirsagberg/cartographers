import { useState } from 'react'
import { FaCoins, FaSpaghettiMonsterFlying } from 'react-icons/fa6'
import { Scores } from './types'
import { getDecrees } from './rules/constants'

export default function ScoresView({ scores }: { scores: Scores }) {
  const [expanded, setExpanded] = useState(false)

  const { season, first, second, coins, monsters } = scores

  const [firstDecree, secondDecree] = getDecrees(season)

  return (
    <div
      key={season}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '4rem',
        gap: '0.5rem',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <span>{season}</span>
      {expanded ? (
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.25rem',
            justifyItems: 'center',
            width: '100%',
          }}
        >
          <span>{firstDecree}</span>
          <span>{first}</span>
          <span>{secondDecree}</span>
          <span>{second}</span>
          <FaCoins />
          <span>{coins}</span>
          <FaSpaghettiMonsterFlying />
          <span>
            {monsters > 0 ? '-' : ''}
            {monsters}
          </span>
        </div>
      ) : (
        <span>{first + second + coins - monsters}</span>
      )}
    </div>
  )
}
