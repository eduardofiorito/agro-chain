import Card from '@/components/Card'
import { QualityProps } from './Quality.types'
import { formatDate } from '@/utils/dataUtils'
import { theme } from '@/theme/tailwindTheme'
import { Award, Sprout, Square, Store } from 'lucide-react'

function Quality({ data }: QualityProps) {
  return (
    <section aria-labelledby="certifications-a11y">
      <h2 className="font-neutral-300 mb-16 text-xl" id="certifications-a11y">
        Sustentabilidade/Certificações
      </h2>
      <div className="mb-16 grid gap-16 md:grid-cols-4 lg:gap-24">
        <Card className="p-16 md:col-span-2">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <Sprout color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-base text-neutral-400">
              Práticas Sustentáveis
            </h3>
          </div>

          <ul className="px-16">
            {data.sustainablePractices.map((practice, index) => (
              <li key={index} className="mb-8 flex items-center gap-12">
                <Square
                  color={theme.colors.primary[500]}
                  fill={theme.colors.primary[500]}
                  height={18}
                  width={18}
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

        <Card className="p-16 md:col-span-2">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <Award color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-base text-neutral-400">Certificações</h3>
          </div>

          <ul className="flex justify-around">
            {data.certifications.map((certification, index) => (
              <li key={index}>
                <div className="flex items-center gap-12">
                  <Square
                    color={theme.colors.primary[500]}
                    fill={theme.colors.primary[500]}
                    height={18}
                    width={18}
                    aria-hidden
                  />
                  <h3 className="text-base text-neutral-400">
                    {certification.name}
                  </h3>
                </div>
                <div className="pl-32">
                  <p className="text-sm text-neutral-400">
                    Data de Obtenção: {formatDate(certification.dateAwarded)}
                  </p>
                  <h4 className="mt-2 text-sm font-medium">
                    Fatores Contribuintes:
                  </h4>
                  <ul className="list-inside list-disc pl-16">
                    {certification.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="text-sm">
                        {factor.description}
                      </li>
                    ))}
                  </ul>
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
