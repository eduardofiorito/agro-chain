import { QualityData } from './Quality.types'

export const QUALITY_DATA: QualityData = {
  certifications: [
    {
      name: 'Selo Orgânico',
      dateAwarded: null,
      progress: 67,
      status: 'in-progress',
      factors: [
        { description: 'Métodos de cultivo orgânicos', achieved: 'success' },
        { description: 'Rotação de culturas', achieved: 'success' },
        {
          description: 'Uso de fertilizantes naturais',
          achieved: 'in-progress',
        },
      ],
    },
    {
      name: 'Certificação de Qualidade',
      dateAwarded: 1695984000000,
      progress: 100,
      status: 'success',
      factors: [
        { description: 'Controle de qualidade rigoroso', achieved: 'success' },
        { description: 'Teste de pureza', achieved: 'success' },
        { description: 'Auditoria de qualidade', achieved: 'success' },
      ],
    },
    {
      name: 'Certificação de Sustentabilidade',
      dateAwarded: null,
      progress: 33,
      status: 'in-progress',
      factors: [
        { description: 'Redução do uso de água', achieved: 'success' },
        {
          description: 'Energia renovável nas operações',
          achieved: 'in-progress',
        },
        {
          description: 'Minimização do uso de pesticidas',
          achieved: 'in-progress',
        },
      ],
    },
    {
      name: 'Certificação GlobalGAP',
      dateAwarded: null,
      progress: 50,
      status: 'in-progress',
      factors: [
        {
          description: 'Boas práticas de manejo agrícola',
          achieved: 'in-progress',
        },
        { description: 'Segurança alimentar', achieved: 'in-progress' },
        { description: 'Sustentabilidade ambiental', achieved: 'success' },
      ],
    },
    {
      name: 'Certificação Fair Trade',
      dateAwarded: null,
      progress: 33,
      status: 'in-progress',
      factors: [
        {
          description: 'Condições de trabalho seguras e justas',
          achieved: 'in-progress',
        },
        { description: 'Pagamento justo', achieved: 'success' },
        {
          description: 'Transparência e responsabilidade',
          achieved: 'in-progress',
        },
      ],
    },
    {
      name: 'Certificação LEAF',
      dateAwarded: null,
      progress: 0,
      status: 'failed',
      factors: [
        {
          description: 'Gestão eficiente de recursos naturais',
          achieved: 'failed',
        },
        { description: 'Minimização do impacto ambiental', achieved: 'failed' },
        { description: 'Melhoria da biodiversidade', achieved: 'failed' },
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
    {
      name: 'Conservação da água',
      description:
        'Implementação de técnicas de irrigação eficientes, como gotejamento, para minimizar o uso de água.',
    },
    {
      name: 'Cobertura do solo',
      description:
        'Uso de plantas de cobertura para proteger o solo da erosão e melhorar sua qualidade.',
    },
    {
      name: 'Reciclagem de resíduos agrícolas',
      description:
        'Reciclagem de resíduos de colheita e outros resíduos agrícolas para produzir composto ou bioenergia.',
    },
    {
      name: 'Agricultura de conservação',
      description:
        'Práticas agrícolas que minimizam a perturbação do solo, como o plantio direto, para melhorar a saúde do solo e reduzir a erosão.',
    },
  ],
}
