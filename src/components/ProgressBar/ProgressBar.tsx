'use client'

import { LinearProgress } from '@mui/material'
import { ProgressBarProps } from './ProgressBar.types'

function ProgressBar({ progress, colors }: ProgressBarProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-16 w-full">
        <p className="mb-4 text-right text-lg text-neutral-200">{`${Math.round(progress)}%`}</p>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="success"
          sx={{
            height: 14,
            backgroundColor: colors.bg,
            '& .MuiLinearProgress-barColorSuccess': {
              backgroundColor: colors.color,
            },
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
