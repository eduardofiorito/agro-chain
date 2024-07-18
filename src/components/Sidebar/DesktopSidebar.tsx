import Navigation from './Navigation'

function DesktopSidebar() {
  return (
    <aside className="z-40 hidden h-screen w-[17.5rem] overflow-y-hidden border-r border-border bg-card p-16 duration-300 ease-linear lg:block">
      <Navigation />
    </aside>
  )
}

export default DesktopSidebar
