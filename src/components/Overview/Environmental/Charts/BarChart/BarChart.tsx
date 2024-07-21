'use client'

import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  XAxis,
} from 'recharts'
import CustomTooltip from '../CustomTooltip'
import { theme } from '@/theme/tailwindTheme'
import { BarChartComponentProps } from './BarChart.types'

function BarChartComponent({
  data,
  color = theme.colors.primary[500],
  suffix = '',
  maxValue,
}: BarChartComponentProps) {
  return (
    <ResponsiveContainer height={60} width="100%">
      <BarChart data={data}>
        <Bar dataKey="value" fill={color} />
        <Tooltip cursor={false} content={<CustomTooltip suffix={suffix} />} />
        {maxValue && (
          <ReferenceLine
            label={`Máx: ${maxValue}${suffix}`}
            y={maxValue}
            stroke={theme.colors.neutral[600]}
            strokeDasharray="10"
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
