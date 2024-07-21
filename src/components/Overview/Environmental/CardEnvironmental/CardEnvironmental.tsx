import Card from '@/components/Card'
import Badge from '@/components/Badge'

import { theme } from '@/theme/tailwindTheme'
import { CardEnvironmentalProps } from './CardEnvironmental.types'
import BarChart from '../Charts/BarChart'
import LineChart from '../Charts/LineChart'
import { ICONS } from './CardEnvironmental.constants'
import { Info } from 'lucide-react'

function CardEnvironmental({
  badge,
  chartData,
  chartType,
  maxValue,
  title,
  type,
  unit,
  value,
}: CardEnvironmentalProps) {
  const IconComponent = ICONS[type] ?? Info

  const ChartComponent = chartType === 'bar' ? BarChart : LineChart

  return (
    <Card className="flex items-center gap-8 p-16">
      <div className="flex h-40 min-w-40 items-center justify-center rounded-full bg-black-500">
        <IconComponent color={theme.colors[type][300]} aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-16">
        <div className="flex items-center justify-between gap-8">
          <span className="text-base text-neutral-400">{title}</span>
          <Badge variant={badge.variant}>{badge.text}</Badge>
        </div>
        <div className="flex items-center justify-between gap-16">
          <span className="flex items-end text-4xl font-semibold text-neutral-300">
            {value} <span className="text-2xl">{unit}</span>
          </span>
          <ChartComponent
            color={theme.colors[type][400]}
            data={chartData}
            suffix={unit}
            maxValue={maxValue}
          />
        </div>
      </div>
    </Card>
  )
}

export default CardEnvironmental
