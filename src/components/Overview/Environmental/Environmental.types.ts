export type Badge = {
  text: string
  variant: 'success' | 'warning' | 'error'
}

export type ChartData = {
  timestamp: string | number
  value: number
  name?: string
}

export type Type =
  | 'temperature'
  | 'humidity'
  | 'soil'
  | 'sunlight'
  | 'water'
  | 'fertilizer'

export type ChartType = 'line' | 'bar'

export type EnvironmentalData = {
  parameters: {
    id: string
    type: Type
    title: string
    badge: Badge
    value: number
    unit: string
    maxValue?: number
    chartData: ChartData[]
    chartType: ChartType
  }[]
}

export type EnvironmentalProps = {
  data: EnvironmentalData
}
