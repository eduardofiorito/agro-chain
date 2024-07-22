'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import { BarChart4, PieChart } from 'lucide-react'

function Navigation() {
  return (
    <nav>
      <ul className="grid gap-16">
        <li>
          <Link href="#about" className="">
            Sobre
          </Link>
        </li>

        <li>
          <Link href="/monitoring" className=""></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
