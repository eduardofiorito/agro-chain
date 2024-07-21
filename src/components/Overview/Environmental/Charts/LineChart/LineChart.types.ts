type LineChartComponentProps = {
  data: { timestamp: string | number; value: number; name?: string }[]
  color?: string
  suffix?: string
}
