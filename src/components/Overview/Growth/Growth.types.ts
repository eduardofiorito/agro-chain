export type HarvestQualityData = {
  parameter: string
  value: string
}

export type ProductionData = {
  label: string
  value1: number
  value2: number
}

export type DeliveryLossData = {
  name: string
  value: number
}

export type Data = {
  harvestQuality: HarvestQualityData[]
  production: ProductionData[]
  deliveryLoss: DeliveryLossData[]
}

export type GrowthProps = {
  data: Data
}
