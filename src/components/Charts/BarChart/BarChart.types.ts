export type BarChartData = {
  label: string
  value1: number
  value2?: number
}

export type BarChartProps = {
  barSize?: number
  data: BarChartData[]
  color1?: string
  color2?: string
  height?: number
  maxValue?: number
  legend?: boolean
  showCartesianGrid?: boolean
  suffix?: string
  label1?: string
  label2?: string
}
