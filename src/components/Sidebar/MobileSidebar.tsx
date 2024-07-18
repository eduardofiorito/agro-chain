import { Sheet, SheetTrigger, SheetContent } from '@/components/Sheet'

import { Menu } from 'lucide-react'
import Navigation from './Navigation'

function MobileSidebar() {
  return (
    <div className="h-40 w-40 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex h-full w-full items-center justify-center rounded-4 bg-card">
            <Menu />
            <span className="sr-only">Abrir menu</span>
          </button>
        </SheetTrigger>

        <SheetContent>
          <Navigation />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSidebar
