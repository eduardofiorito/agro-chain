export type Alert = {
  text: string
  status: 'success' | 'warning' | 'error'
}

export type TransportRecord = {
  vehicle: string
  status: string
  currentRoute: string
  temperature: number
  alerts: Alert
  departureTime: number
  arrivalTime: number
  duration: number
}

export type TableProps = {
  data: TransportRecord[]
  titles: string[]
  tableTitle: string
}
