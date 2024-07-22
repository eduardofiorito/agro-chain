'use client'

import Link from 'next/link'

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
