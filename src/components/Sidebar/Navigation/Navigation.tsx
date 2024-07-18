import Link from 'next/link'

import { MENU_ITEMS } from './MenuItem/MenuItem.constants'
import MenuItem from './MenuItem'
import Logo from '@/components/Logo'

function Navigation() {
  return (
    <nav>
      <ul className="grid gap-8">
        <li className="mb-32">
          <Link href="/dashboard" className="flex items-center">
            <Logo />
          </Link>
        </li>

        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.href} href={item.href} Icon={item.icon}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
