import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Smart Investment Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Grow your wealth with confidence. Low-risk strategies, real-time insights, and secure automation.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors shadow-md hover:shadow-lg"
          onClick={() => setCount((count) => count + 1)}
        >
          Get Started – Count: {count}
        </button>
      </div>
    </div>
  )
}

export default App