export const STAGES = [
  {
    title: 'Preparação do Solo',
    events: [
      { name: 'Aragem do solo', timestamp: 1677628800000, success: true },
      {
        name: 'Adição de fertilizantes NPK',
        timestamp: 1678041600000,
        success: true,
      },
      {
        name: 'Correção do pH com calcário',
        timestamp: 1678502400000,
        success: true,
      },
    ],
    completed: true,
  },
  {
    title: 'Plantio',
    events: [
      {
        name: 'Plantio de mudas de morango',
        timestamp: 1679952000000,
        success: true,
      },
      {
        name: 'Irrigação inicial para estabelecimento',
        timestamp: 1680393600000,
        success: false,
      },
      {
        name: 'Irrigação inicial para estabelecimento',
        timestamp: 1680403700000,
        success: true,
      },
    ],
    completed: true,
  },
  {
    title: 'Fase Vegetativa',
    events: [
      {
        name: 'Aplicação de fertilizantes de crescimento',
        timestamp: 1680451200000,
        success: true,
      },
      {
        name: 'Controle de ervas daninhas',
        timestamp: 1681776000000,
        success: true,
      },
    ],
    completed: true,
  },
  {
    title: 'Floração',
    events: [
      {
        name: 'Monitoramento de geadas',
        timestamp: 1682448000000,
        success: true,
      },
      {
        name: 'Aplicação de fungicidas preventivos',
        timestamp: 1682899200000,
        success: true,
      },
    ],
    completed: true,
  },
  {
    title: 'Desenvolvimento dos Frutos',
    events: [
      {
        name: 'Monitoramento de pragas',
        timestamp: 1683494400000,
        success: true,
      },
      {
        name: 'Ajuste de irrigação conforme necessário',
        timestamp: 1684636800000,
        success: false,
      },
      {
        name: 'Ajuste de irrigação conforme necessário',
        timestamp: 1685636800000,
        success: true,
      },
    ],
    completed: true,
  },
  {
    title: 'Maturação e Colheita',
    events: [
      { name: 'Colheita manual', timestamp: 1686787200000, success: true },
      {
        name: 'Classificação e armazenamento dos frutos',
        timestamp: 1687286400000,
        success: true,
      },
    ],
    completed: true,
  },
  {
    title: 'Pós-Colheita e Manutenção',
    events: [
      {
        name: 'Descarte de plantas antigas',
        timestamp: 1690848000000,
        success: true,
      },
      { name: 'Controle de pragas', timestamp: 1691433600000, success: true },
      {
        name: 'Preparo do solo para o próximo ciclo',
        timestamp: 1692153600000,
        success: true,
      },
    ],
    completed: true,
  },
  {
    title: 'Dormência',
    events: [
      {
        name: 'Proteção contra geadas severas',
        timestamp: 1696003200000,
        success: true,
      },
      {
        name: 'Monitoramento ocasional',
        timestamp: 1701388800000,
        success: true,
      },
    ],
    completed: true,
  },
]
