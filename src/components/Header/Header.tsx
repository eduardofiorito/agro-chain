'use client'

import { CircleUser, Wallet } from 'lucide-react'
import { MobileSidebar } from '../Sidebar'
import { useState } from 'react'

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-black-700 bg-black-100 p-16">
      <MobileSidebar />
      <div className="ml-auto">
        {isAuthenticated ? (
          <div className="flex items-center gap-8 rounded-full bg-black-300 px-16 py-8">
            <CircleUser height={20} width={20} aria-hidden />
            <span className="text-sm font-medium text-neutral-300">
              0x5E62...abeE2B
            </span>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-primary-200 text-sm font-medium text-neutral-300"
            >
              X
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className="flex items-center gap-8 rounded-8 bg-primary-500 px-16 py-8 text-sm font-medium text-black-200"
          >
            <Wallet height={20} width={20} aria-hidden />
            Conectar carteira
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
