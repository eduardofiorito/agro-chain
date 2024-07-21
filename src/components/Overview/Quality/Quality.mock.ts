import { QualityData } from './Quality.types'

export const QUALITY_DATA: QualityData = {
  certifications: [
    {
      name: 'Selo Orgânico',
      dateAwarded: 1693382400000,
      factors: [
        { description: 'Métodos de cultivo orgânicos', impact: 'high' },
        { description: 'Rotação de culturas', impact: 'medium' },
        { description: 'Uso de fertilizantes naturais', impact: 'high' },
      ],
    },
    {
      name: 'Certificação de Sustentabilidade',
      dateAwarded: 1695984000000,
      factors: [
        { description: 'Redução do uso de água', impact: 'high' },
        { description: 'Energia renovável nas operações', impact: 'medium' },
        { description: 'Minimização do uso de pesticidas', impact: 'high' },
      ],
    },
  ],
  sustainablePractices: [
    {
      name: 'Métodos de cultivo orgânicos',
      description:
        'Uso de compostagem e adubos naturais para manter a fertilidade do solo.',
    },
    {
      name: 'Rotação de culturas',
      description:
        'Alternância das culturas plantadas para evitar o esgotamento do solo.',
    },
  ],
}
