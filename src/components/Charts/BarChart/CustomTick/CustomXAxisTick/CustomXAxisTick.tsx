import { theme } from '@/theme/tailwindTheme'
import { CustomTickProps } from '../CustomTick.types'

function CustomXAxisTick({ x, y, payload, suffix = '' }: CustomTickProps) {
  return (
    <text
      x={x}
      y={y}
      dy={12}
      textAnchor="middle"
      className="text-xs"
      fill={theme.colors.neutral[600]}
    >
      {!!payload && payload.value + suffix}
    </text>
  )
}

export default CustomXAxisTick
