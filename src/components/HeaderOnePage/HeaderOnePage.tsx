import React from 'react'
import Link from 'next/link'
import Logo from '../Logo'

import Popover from '../Popover'

export const NAV_ITEMS = [
  { href: '#about', label: 'Sobre' },

  { href: '#benefits', label: 'Benefícios' },
  { href: '#stamps', label: 'Selos' },
]

function HeaderOnePage() {
  return (
    <header className="sticky top-0 bg-black-300 p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between md:flex-row">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-12">
            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Link href="#about" className="px-4 text-sm uppercase">
                Sobre
              </Link>
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Popover />
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Link href="#stamps" className="px-4 text-sm uppercase">
                Selos
              </Link>
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Link href="#benefits" className="px-4 text-sm uppercase">
                Benefícios
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderOnePage
