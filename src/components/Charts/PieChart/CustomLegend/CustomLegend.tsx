import { Square } from 'lucide-react'
import { LegendProps } from 'recharts'

function CustomLegend({ payload }: LegendProps) {
  if (payload && payload.length) {
    return (
      <div className="mt-24 flex flex-wrap gap-8 xl:justify-center">
        {payload.map((item, index) => (
          <div className="flex items-center gap-8" key={index}>
            <Square color={item.color} fill={item.color} width={16} />
            <span className="whitespace-nowrap text-xs text-neutral-400 lg:text-sm">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default CustomLegend
