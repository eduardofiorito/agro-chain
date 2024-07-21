import { TooltipProps } from 'recharts'

export type CustomTooltipProps = TooltipProps<number, string> & {
  suffix?: string
}
