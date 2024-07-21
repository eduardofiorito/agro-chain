'use client'

import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  YAxis,
} from 'recharts'
import CustomTooltip from '../CustomTooltip'
import { theme } from '@/theme/tailwindTheme'

function LineChartComponent({
  data,
  color = theme.colors.primary[500],
  suffix = '',
}: LineChartComponentProps) {
  return (
    <ResponsiveContainer height={60} width="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} />
        <Tooltip cursor={false} content={<CustomTooltip suffix={suffix} />} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
