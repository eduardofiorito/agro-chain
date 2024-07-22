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
          <ul className="flex gap-4 md:gap-12">
            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Link href="#about" className="text-sm uppercase md:px-4">
                Sobre
              </Link>
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Popover />
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Link href="#stamps" className="text-sm uppercase md:px-4">
                Selos
              </Link>
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Link href="#benefits" className="text-sm uppercase md:px-4">
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
