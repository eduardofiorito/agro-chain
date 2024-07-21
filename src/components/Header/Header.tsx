'use client'

import Logo from '../Logo'
import { MobileSidebar } from '../Sidebar'

function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-black-700 bg-black-100 p-16 lg:hidden">
      <MobileSidebar />

      <Logo />
    </header>
  )
}

export default Header
