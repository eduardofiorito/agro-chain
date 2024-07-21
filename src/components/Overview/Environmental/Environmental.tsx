import { convertTimestamps } from '@/utils/convert-timestamps'
import CardEnvironmental from './CardEnvironmental'

import { EnvironmentalProps } from './Environmental.types'

function Environmental({ data }: EnvironmentalProps) {
  const { parameters } = data

  return (
    <section aria-labelledby="environmental-a11y">
      <h2 className="font-neutral-300 mb-16 text-xl" id="environmental-a11y">
        Dados ambientais e de cultivo
      </h2>
      <div className="grid gap-16 md:grid-cols-2 lg:gap-24 xl:grid-cols-3">
        {!!parameters &&
          parameters.length > 0 &&
          parameters.map((param) => (
            <CardEnvironmental key={param.id} {...param} />
          ))}
      </div>
    </section>
  )
}

export default Environmental
