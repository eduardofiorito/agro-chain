import Quality from '@/components/Overview/Quality'

import { QUALITY_DATA } from '@/components/Overview/Quality/Quality.mock'

function CertificationsAndSustainabilityPage() {
  return (
    <section
      className="mx-auto flex w-full flex-col gap-16 p-16 lg:gap-24 lg:py-32 xl:py-48 xxl:max-w-[90rem]"
      aria-labelledby="overview-a11y"
    >
      <h1
        className="mb-16 text-xl font-medium text-neutral-300 md:text-2xl lg:mb-24 lg:text-3xl"
        id="overview-a11y"
      >
        Certificações e Sustentabilidade
      </h1>

      <Quality data={QUALITY_DATA} />
    </section>
  )
}

export default CertificationsAndSustainabilityPage
