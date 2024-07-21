import { formatDate } from '@/utils/dataUtils'

import ProgressBar from '@/components/ProgressBar'
import { AlertCircle, Check, Square, XCircle } from 'lucide-react'
import clsx from 'clsx'
import { CertificationCardProps } from './CertificationCard.types'
import { theme } from '@/theme/tailwindTheme'
import Certified from '@/components/Icons/Certified'

function CertificationCard({ certification }: CertificationCardProps) {
  const colors = {
    success: {
      color: theme.colors.primary[500],
      bg: theme.colors.primary[100],
    },
    'in-progress': {
      color: theme.colors.neutral[600],
      bg: theme.colors.neutral[100],
    },
    failed: { color: theme.colors.error[500], bg: theme.colors.error[100] },
  }

  return (
    <div className="relative flex gap-16 rounded-2xl border border-black-700 shadow shadow-black-700">
      <div className="absolute right-8 top-8">
        <Certified
          color={colors[certification.status].color}
          className='w-9 h-9 md:w-11 md:h-11'
        />
      </div>

      <div className="flex-1 p-16">
        <h4 className="mb-2 text-lg font-semibold text-neutral-200">
          {certification.name}
        </h4>
        <p className="mb-2 text-sm text-neutral-500">
          Data de Obtenção:{' '}
          {certification.dateAwarded ? (
            <span className="text-neutral-300">
              {formatDate(certification.dateAwarded)}
            </span>
          ) : (
            <span className="text-neutral-200">Ainda não obtido</span>
          )}
          .
        </p>

        <div className="mt-16 pr-32">
          <ProgressBar
            progress={certification.progress}
            label={certification.name}
            colors={colors[certification.status]}
          />
          <p className="text-sm font-medium text-neutral-300">Critérios: </p>
          <ul className="borber-black-700 mt-4">
            {certification.factors.map((factor, index) => (
              <li
                key={index}
                className="mt-2 flex items-center justify-between gap-4 text-sm"
              >
                <Square
                  width={16}
                  color={colors[factor.achieved].color}
                  fill={colors[factor.achieved].color}
                />
                <span className="mr-auto">{factor.description} </span>
                {factor.achieved === 'success' ? (
                  <Check
                    width={16}
                    color={theme.colors.primary[500]}
                    className="min-w-16"
                  />
                ) : factor.achieved === 'in-progress' ? (
                  <AlertCircle
                    width={16}
                    color={theme.colors.neutral[500]}
                    className="min-w-16"
                  />
                ) : (
                  <XCircle
                    width={16}
                    color={theme.colors.error[500]}
                    className="min-w-16"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CertificationCard
