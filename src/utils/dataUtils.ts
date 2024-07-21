import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (timestamp: number): string => {
  return format(new Date(timestamp), 'dd/MM/yyyy', { locale: ptBR })
}

export const formatDayMonth = (timestamp: number): string => {
  return format(new Date(timestamp), 'dd/MM', { locale: ptBR })
}

export const formatDayMonthAbbr = (timestamp: number): string => {
  return format(new Date(timestamp), 'dd MMM', { locale: ptBR })
}

export const formatTime = (timestamp: number): string => {
  return format(new Date(timestamp), 'HH:mm', { locale: ptBR })
}

export const getDay = (timestamp: number): string => {
  return format(new Date(timestamp), 'd', { locale: ptBR })
}

export const getMonth = (timestamp: number): string => {
  return format(new Date(timestamp), 'MMMM', { locale: ptBR })
}

export const getYear = (timestamp: number): string => {
  return format(new Date(timestamp), 'yyyy', { locale: ptBR })
}

export function formatDuration(minutes: number): string {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`
}
