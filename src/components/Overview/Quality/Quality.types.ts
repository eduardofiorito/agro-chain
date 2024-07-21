export type Certification = {
  name: string
  dateAwarded: number | null
  progress: number
  status: 'success' | 'in-progress' | 'failed'
  factors: {
    description: string
    achieved: 'success' | 'in-progress' | 'failed'
  }[]
}

export type SustainablePractice = {
  name: string
  description: string
}

export type QualityData = {
  certifications: Certification[]
  sustainablePractices: SustainablePractice[]
}

export type QualityProps = {
  data: QualityData
}
