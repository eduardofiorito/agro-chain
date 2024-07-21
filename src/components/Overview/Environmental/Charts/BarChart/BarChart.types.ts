export type BarChartComponentProps = {
  color?: string
  data: { timestamp: string | number; value: number; name?: string }[]
  maxValue?: number
  suffix?: string
}
