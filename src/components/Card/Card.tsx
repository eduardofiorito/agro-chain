import clsx from 'clsx'
import { CardProps } from './Card.types'

function Card({ children, className }: CardProps) {
  return (
    <article
      className={clsx(
        'rounded-2xl border border-black-700 bg-black-300',
        className,
      )}
    >
      {children}
    </article>
  )
}

export default Card
