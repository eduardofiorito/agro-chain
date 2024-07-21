type DynamicTimelineProps = {
  data: Category[]
}

type Category = {
  category: string
  records: {
    name: string
    timestamp: number
    details: string
    recordedBy: string
    success: boolean | null
  }[]
}
