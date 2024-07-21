import Navigation from './Navigation'

function DesktopSidebar() {
  return (
    <aside className="bg-black-300 border-black-700 z-40 hidden h-screen w-[20rem] overflow-y-hidden border-r p-16 duration-300 ease-linear lg:block">
      <Navigation />
    </aside>
  )
}

export default DesktopSidebar
