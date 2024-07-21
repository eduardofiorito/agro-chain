'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import { BarChartProps } from './BarChart.types'
import { theme } from '@/theme/tailwindTheme'
import CustomXAxisTick from './CustomTick/CustomXAxisTick'
import CustomYAxisTick from './CustomTick/CustomYAxisTick'
import CustomTooltip from './CustomTooltip'
import CustomLegend from './CustomLegend'

function BarChartComponent({
  barSize = 8,
  data,
  color1 = theme.colors.primary[500],
  color2 = theme.colors.primary[300],
  maxValue,
  height = 300,
  showCartesianGrid = false,
  suffix = '',
  label1 = 'value1',
  label2 = 'value2',
  legend = false,
}: BarChartProps) {
  return (
    <ResponsiveContainer height={height} width="100%">
      <BarChart
        data={data}
        barCategoryGap={16}
        margin={{
          top: 10,
          right: 20,
          left: -5,
          bottom: 0,
        }}
      >
        {showCartesianGrid && (
          <CartesianGrid
            horizontal={false}
            stroke={theme.colors.neutral[600]}
            strokeWidth="1"
            strokeDasharray="5"
          />
        )}
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="label"
          type="category"
          tick={<CustomXAxisTick />}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          dataKey="value1"
          type="number"
          interval={0}
          tick={<CustomYAxisTick suffix={suffix} />}
        />

        <Bar
          dataKey="value1"
          fill={color1}
          animationDuration={300}
          barSize={barSize}
          radius={[5, 5, 5, 5]}
        />

        <Bar
          dataKey="value2"
          fill={color2}
          animationDuration={300}
          barSize={barSize}
          radius={[5, 5, 5, 5]}
        />

        <Tooltip
          cursor={false}
          content={
            <CustomTooltip label1={label1} label2={label2} suffix={suffix} />
          }
        />
        {legend && (
          <Legend content={<CustomLegend label1={label1} label2={label2} />} />
        )}

        {maxValue && (
          <ReferenceLine
            label={`Máx: ${maxValue}`}
            y={maxValue}
            stroke={theme.colors.neutral[600]}
            strokeDasharray="3 3"
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
