import Environmental from '@/components/Overview/Environmental'
import Growth from '@/components/Overview/Growth'
import Traceability from '@/components/Overview/Traceability'

import { GROWTH_DATA } from '@/components/Overview/Growth/Growth.mock'
import { TRACEABILITY_DATA } from '@/components/Overview/Traceability/Traceability.mock'
import { ENVIRONMENTAL_DATA } from '@/components/Overview/Environmental/Environmental.mock'
import { convertTimestamps } from '@/utils/convert-timestamps'

function MonitorinPage() {
  return (
    <section
      className="mx-auto flex w-full flex-col gap-16 p-16 lg:gap-24 lg:py-32 xl:py-48 xxl:max-w-[90rem]"
      aria-labelledby="overview-a11y"
    >
      <h1
        className="mb-16 text-xl font-medium text-neutral-300 md:text-2xl lg:mb-24 lg:text-3xl"
        id="overview-a11y"
      >
        Monitoramento
      </h1>

      <Environmental data={convertTimestamps(ENVIRONMENTAL_DATA)} />

      <Growth data={GROWTH_DATA} />

      <Traceability data={TRACEABILITY_DATA} />
    </section>
  )
}

export default MonitorinPage
