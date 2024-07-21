import { Square } from 'lucide-react'
import { CustomLegendProps } from './CustomLegend.types'

function CustomLegend({ payload, label1, label2 = '' }: CustomLegendProps) {
  return (
    <div className="ml-5 flex gap-8 border-t border-black-700 pt-16">
      {payload && payload.length && (
        <>
          <div className="flex items-center gap-2">
            <Square
              color={payload[0].color}
              fill={payload[0].color}
              size={18}
            />
            <span className="text-xs text-neutral-400">{label1}</span>
          </div>
          <div className="flex items-center gap-2">
            <Square
              color={payload[1].color}
              fill={payload[1].color}
              size={18}
            />
            <span className="text-xs text-neutral-400">{label2}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default CustomLegend
