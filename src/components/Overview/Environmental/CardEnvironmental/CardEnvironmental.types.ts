import { Badge, ChartType, Type } from '../Environmental.types'

export type CardEnvironmentalProps = {
  id: string
  type: Type
  title: string
  badge: Badge
  value: number
  unit: string
  maxValue?: number
  chartData: ChartData[]
  chartType: ChartType
}

type ChartData = {
  timestamp: string | number
  value: number
  name?: string
}
