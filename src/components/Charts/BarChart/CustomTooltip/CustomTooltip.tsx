import { CustomTooltipProps } from './CustomTooltip.types'
import { Square } from 'lucide-react'

function CustomTooltip({
  active,
  payload,
  label,
  label1,
  label2,
  suffix,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded border border-black-700 bg-black-200">
        <p className="border-b-1 border-black-700 text-center font-bold">
          {label}
        </p>

        <div className="flex flex-col gap-8 bg-black-400 p-8">
          <div className="flex items-center justify-between gap-4">
            <Square
              color={payload[0].color}
              fill={payload[0].color}
              height={16}
              width={16}
            />
            <p className="mr-8 text-xs text-neutral-300">{label1}:</p>

            <p className="ml-auto text-sm text-neutral-200">
              {payload[0].value} {suffix}
            </p>
          </div>
          {payload[1] && (
            <div className="flex items-center justify-between gap-4">
              <Square
                color={payload[1].color}
                fill={payload[1].color}
                height={16}
                width={16}
              />
              <p className="mr-8 text-xs text-neutral-300">{label2}:</p>

              <p className="ml-auto text-sm text-neutral-200">
                {payload[1].value} {suffix}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default CustomTooltip
