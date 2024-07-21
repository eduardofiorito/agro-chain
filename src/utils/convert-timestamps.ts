import { EnvironmentalData } from '@/components/Overview/Environmental/Environmental.types'

export function convertTimestamps(apiResponse: EnvironmentalData) {
  return {
    parameters: apiResponse.parameters.map((item) => {
      if (item.type === 'water') {
        return {
          ...item,
          chartData: item.chartData.map((entry) => {
            const date = new Date(entry.timestamp)
            const dayOfWeek = date.toLocaleDateString('pt-BR', {
              weekday: 'short',
            })
            return {
              timestamp: dayOfWeek,
              value: entry.value,
            }
          }),
        }
      } else {
        return {
          ...item,
          chartData: item.chartData.map((entry) => ({
            timestamp: new Date(entry.timestamp).getHours() + 'h',
            value: entry.value,
            name: entry?.name || '',
          })),
        }
      }
    }),
  }
}
