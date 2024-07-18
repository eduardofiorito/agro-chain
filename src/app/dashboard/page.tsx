function Dashboard() {
  const sensors = Array.from({ length: 50 }, (_, i) => `sensor ${i + 1}`)

  return (
    <div className="flex flex-col">
      {sensors.map((sensor, index) => (
        <li key={index}>{sensor}</li>
      ))}
    </div>
  )
}

export default Dashboard
