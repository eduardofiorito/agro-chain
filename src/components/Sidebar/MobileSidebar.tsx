import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetOverlay,
} from '@/components/Sheet'

import { Menu } from 'lucide-react'
import Navigation from './Navigation'

function MobileSidebar() {
  return (
    <div className="h-40 w-40 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex h-full w-full items-center justify-center rounded-4 bg-black-300">
            <Menu />
            <span className="sr-only">Abrir menu</span>
          </button>
        </SheetTrigger>
        <SheetOverlay />

        <SheetContent>
          <Navigation />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSidebar
