function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          New Portfolio
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          React 19 + Vite + Tailwind CSS
        </p>
        <a
          href="/popup-portfolio"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          View Classic Portfolio
        </a>
      </div>
    </div>
  )
}

export default App
