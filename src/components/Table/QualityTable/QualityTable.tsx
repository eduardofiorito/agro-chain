function QualityTable({ data, titles, tableTitle }: TableProps) {
  return (
    <table className="min-w-full divide-y divide-black-700">
      <caption className="bg-black-600 px-12 py-8 text-left text-base text-neutral-400">
        {tableTitle}
      </caption>
      <thead>
        {titles &&
          titles.length > 0 &&
          titles.map((title, index) => (
            <tr key={'title' + index}>
              <th className="bg-black-400 px-8 py-8 text-left text-base font-medium text-neutral-300">
                {title}
              </th>
            </tr>
          ))}
      </thead>
      <tbody className="divide-y divide-black-700">
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-black-200">
            <td className="px-12 py-4 text-sm text-neutral-400">
              {item.parameter}
            </td>
            <td className="px-12 py-6 text-sm text-neutral-400">
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default QualityTable
