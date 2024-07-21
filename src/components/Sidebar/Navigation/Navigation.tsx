'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import { BarChart4, PieChart } from 'lucide-react'
import { usePathname } from 'next/navigation'

function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="grid gap-16">
        <li className="mb-32">
          <Link
            href="/certifications-and-sustainability"
            className="flex items-center"
          >
            <Logo />
          </Link>
        </li>

        <li>
          <Link
            href="/certifications-and-sustainability"
            className={clsx(
              pathname === '/certifications-and-sustainability'
                ? 'bg-primary-500 text-black-100'
                : 'bg-transparent text-neutral-300',
              'flex h-56 items-center gap-8 rounded-8 px-16 py-6',
            )}
          >
            <BarChart4 />
            <span className="text-md font-medium leading-4">
              Certificações e sustentabilidade
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/monitoring"
            className={clsx(
              pathname === '/monitoring'
                ? 'bg-primary-500 text-black-100'
                : 'bg-transparent text-neutral-300',
              'flex h-56 items-center gap-8 rounded-8 px-16 py-6',
            )}
          >
            <PieChart />
            <span className="text-md font-medium leading-4">Monitoramento</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
