import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-600">
                InvestSmart
              </a>
            </div>

            {/* Nav Links (simple for now) */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button in Nav */}
            <div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                  Grow Your Wealth{' '}
                  <span className="text-blue-600">Smartly & Securely</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto lg:mx-0">
                  Join thousands investing smarter with low-risk portfolios, real-time analytics, and automated tools powered by secure cloud infrastructure.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => setCount((count) => count + 1)}
                  >
                    Get Started Free
                  </button>
                  <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 font-bold py-4 px-8 rounded-xl text-lg transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                    Watch Demo
                  </button>
                </div>

                {/* Trust signals */}
                <p className="mt-8 text-sm text-gray-500">
                  Trusted by 10,000+ users • No credit card required
                </p>
              </div>

              {/* Right side: Placeholder for image/illustration */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Portfolio Growth</h3>
                  <p className="text-gray-600">
                    +24.5% this year (simulated)
                  </p>
                  {/* In future steps we can add a real chart or SVG */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Temporary counter for testing */}
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg text-sm">
        Test count: {count}
      </div>
    </div>
  )
}

export default App