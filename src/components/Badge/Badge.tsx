import { VARIANT_CLASSES } from './Badge.constants'
import { BadgeProps } from './Badge.types'
import clsx from 'clsx'

function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-xl px-3 py-0.5 text-sm font-medium',
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
