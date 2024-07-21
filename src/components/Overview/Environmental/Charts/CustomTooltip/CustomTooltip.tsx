import { CustomTooltipProps } from './CustomTooltip.types'

function CustomTooltip({ active, payload, suffix = '' }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded border border-black-700 bg-black-200">
        <div className="flex items-center justify-center gap-4 p-4 px-16">
          <p className="text-sm">{`${payload[0].value}${suffix}`}</p>
        </div>
        <p className="bg-black-400 px-8 py-4 text-sm text-center">
          {payload[0].payload.name || payload[0].payload.timestamp}
        </p>
      </div>
    )
  }

  return null
}

export default CustomTooltip
