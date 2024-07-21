import Card from '@/components/Card'

import { theme } from '@/theme/tailwindTheme'
import { History, Store } from 'lucide-react'

import TraceabilityTimeline from './TraceabilityTimeline/TraceabilityTimeline'
import PieChart from '@/components/Charts/PieChart'
import Table from '@/components/Table/TransportTable'
import { TraceabilityProps } from './Traceability.types'

function Traceability({ data }: TraceabilityProps) {
  return (
    <section aria-labelledby="traceability-a11y">
      <h2 className="font-neutral-300 mb-16 text-xl" id="traceability-a11y">
        Rastreabilidade
      </h2>
      <div className="mb-16 grid gap-16 lg:grid-cols-4 lg:gap-24 xl:grid-cols-8">
        <Card className="h-full w-full p-16 lg:col-span-2 lg:row-span-8 xl:col-span-3">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <History color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-base text-neutral-400">
              Rastreabilidade mensal
            </h3>
          </div>
          <TraceabilityTimeline data={data.traceabilityMonthly} />
        </Card>

        <Card className="h-full w-full p-16 lg:col-span-2 lg:row-span-2 xl:col-span-5">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <Store color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-base text-neutral-400">
              Distribuição Percentual de Vendas por Estabelecimento
            </h3>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="max-h-[400px] max-w-[600px]">
              <PieChart
                data={data.salesMonthly}
                colors={[
                  theme.colors.primary[500],
                  theme.colors.primary[100],
                  theme.colors.primary[300],
                  theme.colors.primary[200],
                ]}
                width={600}
                height={400}
              />
            </div>
          </div>
        </Card>

        <Card className="custom-scrollbar overflow-x-auto lg:col-span-2 lg:row-span-6 xl:col-span-5">
          <Table
            data={data.transportData}
            titles={data.transportTitles}
            tableTitle="Condições de Transporte"
          />
        </Card>
      </div>
    </section>
  )
}

export default Traceability
