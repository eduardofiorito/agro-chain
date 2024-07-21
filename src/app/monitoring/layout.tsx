import Header from '@/components/Header'
import { DesktopSidebar } from '@/components/Sidebar'
import { LayoutProps } from './layout.types'

function MonitoringLayout({ children }: LayoutProps) {
  return (
    <main className="flex h-screen overflow-hidden">
      <DesktopSidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />

        <>{children}</>
      </div>
    </main>
  )
}

export default MonitoringLayout
