import { TooltipProps } from 'recharts'

export type CustomTooltipProps = TooltipProps<number, string> & {
  label1: string
  label2: string
  suffix?: string
}
