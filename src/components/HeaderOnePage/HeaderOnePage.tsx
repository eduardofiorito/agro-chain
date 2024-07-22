import Link from 'next/link'
import Logo from '../Logo'

import Popover from '../Popover'

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
              <a href="#about" className="text-sm uppercase md:px-4">
                Sobre
              </a>
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <Popover />
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <a href="#stamps" className="text-sm uppercase md:px-4">
                Selos
              </a>
            </li>

            <li className="flex cursor-pointer items-center whitespace-nowrap px-8 text-neutral-300 hover:underline">
              <a href="#benefits" className="text-sm uppercase md:px-4">
                Benefícios
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderOnePage
