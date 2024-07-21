import CertificationCard from './CertificationCard/CertificationCard'
import { CertificationsProps } from './Certification.types'
import { theme } from '@/theme/tailwindTheme'

import { Award } from 'lucide-react'
import Card from '@/components/Card'

function Certifications({ certifications }: CertificationsProps) {
  return (
    <Card className="bg-red p-16 md:col-span-2">
      <div className="mb-16 flex items-center gap-12">
        <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
          <Award color={theme.colors.primary[500]} aria-hidden />
        </div>
        <h3 className="text-lg text-neutral-400">Certificações</h3>
      </div>

      <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">
        {certifications.length > 0 &&
          certifications.map((certification) => (
            <CertificationCard
              key={certification.name}
              certification={certification}
            />
          ))}
      </div>
    </Card>
  )
}

export default Certifications
