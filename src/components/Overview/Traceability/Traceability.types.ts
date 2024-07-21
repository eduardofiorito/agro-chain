export type Record = {
  name: string
  timestamp: number
  details: string
  recordedBy: string
  success: boolean
}

export type Category = {
  category: string
  records: Record[]
}

export type SalesMonthly = {
  name: string
  value: number
}

export type TransportData = {
  vehicle: string
  status: string
  currentRoute: string
  temperature: number
  humidity?: number
  alerts: { text: string; status: 'success' | 'warning' | 'error' }
  departureTime: number
  arrivalTime: number
  duration: number
}

export type TransportTitles = string[]

export type TraceabilityData = {
  traceabilityMonthly: Category[]
  salesMonthly: SalesMonthly[]
  transportData: TransportData[]
  transportTitles: TransportTitles
}

export type TraceabilityProps = {
  data: TraceabilityData
}
