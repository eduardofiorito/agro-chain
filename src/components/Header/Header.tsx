import { MobileSidebar } from '../Sidebar'

function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-background p-16">
      <MobileSidebar />
      <h1>AgroChain</h1>
    </header>
  )
}

export default Header
