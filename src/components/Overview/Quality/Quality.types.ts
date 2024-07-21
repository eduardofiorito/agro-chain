export type Certification = {
  name: string
  dateAwarded: number
  factors: {
    description: string
    impact: 'high' | 'medium' | 'low'
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
