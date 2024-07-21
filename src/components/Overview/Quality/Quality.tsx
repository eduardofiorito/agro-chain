'use client'

import Card from '@/components/Card'
import { QualityProps } from './Quality.types'

import { theme } from '@/theme/tailwindTheme'
import { Sprout, Square } from 'lucide-react'
import Certifications from './Certification/Certification'

function Quality({ data }: QualityProps) {
  return (
    <section aria-labelledby="certifications-a11y">
      <h2 className="sr-only" id="certifications-a11y">
        Certificações | Sustentabilidade
      </h2>
      <div className="mb-16 flex flex-col gap-16 lg:gap-24">
        <Certifications certifications={data.certifications} />

        <Card className="p-16 md:col-span-2">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <Sprout color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-lg text-neutral-400">Práticas Sustentáveis</h3>
          </div>

          <ul className="grid md:grid-cols-2 px-16">
            {data.sustainablePractices.map((practice, index) => (
              <li key={index} className="mb-8 flex items-center gap-12">
                <Square
                  color={theme.colors.primary[500]}
                  fill={theme.colors.primary[500]}
                  height={18}
                  width={18}
                  className="min-w-[18px]"
                />
                <div className="flex flex-col">
                  <h4 className="text-neutral-400">{practice.name}</h4>
                  <p className="text-sm text-neutral-500">
                    {practice.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}

export default Quality
