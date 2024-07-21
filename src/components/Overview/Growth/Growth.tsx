import Card from '@/components/Card'
import BarChartComponent from '@/components/Charts/BarChart'
import PieChart from '@/components/Charts/PieChart'
import Timeline from '@/components/Timeline'
import { theme } from '@/theme/tailwindTheme'
import { History, Package } from 'lucide-react'
import Table from '@/components/Table/QualityTable'

import { GrowthProps } from './Growth.types'

function Growth({ data }: GrowthProps) {
  return (
    <section aria-labelledby="growth-a11y">
      <h2 className="font-neutral-300 mb-16 text-xl" id="growth-a11y">
        Crescimento e Produção
      </h2>
      <div className="mb-16 grid gap-16 md:grid-cols-4 lg:gap-24 xl:grid-cols-6">
        <Card className="p-16 md:col-span-2 md:row-span-3 xl:col-span-4">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <Package color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-base text-neutral-400">Produção mensal</h3>
          </div>

          <BarChartComponent
            barSize={24}
            data={data.production}
            height={400}
            color1={theme.colors.primary[500]}
            color2={theme.colors.primary[100]}
            suffix="kg"
            legend={true}
            label1="Produtos entregues"
            label2="Produtos perdidos"
          />
        </Card>

        <Card className="h-full w-full p-16 md:col-span-2 md:row-span-6">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <History color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-base text-neutral-400">
              Linha do Tempo de Crescimento do Produto
            </h3>
          </div>
          <Timeline />
        </Card>

        <Card className="flex h-full w-full flex-col p-16 md:col-span-2 md:row-span-3 xl:col-span-2">
          <div className="mb-16 flex items-center gap-12">
            <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
              <Package color={theme.colors.primary[500]} aria-hidden />
            </div>
            <h3 className="text-base text-neutral-400">
              Produtos entregues vs perdidos
            </h3>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="-mt-32 w-full max-w-[360px]">
              <PieChart
                data={data.deliveryLoss}
                colors={[theme.colors.primary[500], theme.colors.primary[100]]}
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden md:col-span-4 md:row-span-3 xl:col-span-2">
          <Table
            data={data.harvestQuality}
            tableTitle="Qualidade da colheita"
          />
        </Card>
      </div>
    </section>
  )
}

export default Growth
