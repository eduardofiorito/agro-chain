import { theme } from '@/theme/tailwindTheme'
import { CustomTickProps } from '../CustomTick.types'

function CustomYAxisTick({ x, y, payload, suffix }: CustomTickProps) {
  return (
    <text
      x={x}
      y={y}
      dy={2}
      textAnchor="end"
      className="text-xs"
      fill={theme.colors.neutral[600]}
    >
      {!!payload && payload.value + suffix}
    </text>
  )
}

export default CustomYAxisTick
