import Header from '@/components/Header'
import { DesktopSidebar } from '@/components/Sidebar'
import { LayoutProps } from './layout.types'

function DashboardLayout({ children }: LayoutProps) {
  return (
    <main className="flex h-screen overflow-hidden">
      <DesktopSidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <section className="xxl:max-w-[90rem] mx-auto w-full p-16">
          {children}
        </section>
      </div>
    </main>
  )
}

export default DashboardLayout
