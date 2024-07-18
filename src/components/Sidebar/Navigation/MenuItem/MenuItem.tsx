import { LucideProps } from 'lucide-react'
import Link from 'next/link'
import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react'

interface MenuItemProps {
  href: string
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  children: ReactNode
}

function MenuItem({ children, href, Icon }: MenuItemProps) {
  return (
    <li>
      <Link href={href} className="mb-4 flex items-center gap-8 py-6 px-16">
        {<Icon aria-hidden width={20} height={20} />}
        <span className="text-md">{children}</span>
      </Link>
    </li>
  )
}

export default MenuItem
