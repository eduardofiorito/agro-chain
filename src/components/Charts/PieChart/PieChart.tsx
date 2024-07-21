'use client'

import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { PieChartProps } from './PieChart.types'
import CustomLegend from './CustomLegend'

function PieChartComponent({
  data,
  colors,
  width = 300,
  height = 300,
}: PieChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        strokeWidth={0}
        label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend content={<CustomLegend />} />
    </PieChart>
  )
}

export default PieChartComponent
