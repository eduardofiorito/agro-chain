import { LegendProps } from 'recharts'

export type CustomLegendProps = LegendProps & {
  label1: string
  label2?: string
}
