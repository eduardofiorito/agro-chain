import React from 'react'
import { TableProps } from './TransportTable.types'
import { formatDate, formatDuration, formatTime } from '@/utils/dataUtils'
import Badge from '@/components/Badge'

function TransportTable({ data, titles, tableTitle }: TableProps) {
  return (
    <table className="min-w-full divide-y divide-black-700">
      <caption className="bg-black-600 p-4 px-12 text-left text-base text-neutral-400">
        {tableTitle}
      </caption>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th
              key={'title' + index}
              className="whitespace-nowrap bg-black-400 px-16 py-8 text-left text-base font-medium text-neutral-300"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-black-700">
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-black-200">
            <td className="min-w-80 px-12 py-4 text-sm text-neutral-400">
              {item.vehicle}
            </td>
            <td className="px-16 py-8 text-sm text-neutral-400">
              <Badge className="whitespace-nowrap" variant={item.alerts.status}>
                {item.status}
              </Badge>
            </td>
            <td className="px-16 py-8 text-sm text-neutral-400">
              {item.currentRoute}
            </td>
            <td className="px-16 py-8 text-sm text-neutral-400">
              {item.temperature}°C
            </td>
            <td className="px-16 py-8 text-sm text-neutral-400">
              <Badge className="whitespace-nowrap" variant={item.alerts.status}>
                {item.alerts.text}
              </Badge>
            </td>
            <td className="px-16 py-8 text-sm text-neutral-400">
              {formatDate(item.departureTime)} {formatTime(item.departureTime)}
            </td>
            <td className="px-16 py-8 text-sm text-neutral-400">
              {formatDate(item.arrivalTime)} {formatTime(item.arrivalTime)}
            </td>
            <td className="px-16 py-8 text-sm text-neutral-400">
              {formatDuration(item.duration)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransportTable
