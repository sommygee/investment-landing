import { useState } from 'react';
import { useTheme } from './context/ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased dark:bg-gray-950">
      {/* ────────────────────────────────────────────────
          Navbar (fixed, glassmorphism style)
      ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                InvestSmart
              </a>
            </div>

            {/* Navigation links – hidden on mobile */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Actions: Sign Up + Dark Mode Toggle */}
            <div className="flex items-center gap-4">
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-950"
              >
                Sign Up
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-950"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────────
          Hero Section
      ──────────────────────────────────────────────── */}
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              {/* Left: Text content */}
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                  Grow Your Wealth{' '}
                  <span className="text-blue-600 dark:text-blue-400">Smartly & Securely</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto lg:mx-0">
                  Join thousands investing smarter with low-risk portfolios, real-time analytics, and automated tools powered by secure cloud infrastructure.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-950"
                    onClick={() => setCount((c) => c + 1)}
                  >
                    Get Started Free
                  </button>

                  <button
                    className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 font-bold py-4 px-8 rounded-xl text-lg transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:focus:ring-gray-700"
                  >
                    Watch Demo
                  </button>
                </div>

                <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                  Trusted by 10,000+ users • No credit card required
                </p>
              </div>

              {/* Right: Placeholder illustration (lg screens only) */}
              <div className="hidden lg:block">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Your Portfolio Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +24.5% this year (simulated)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Why Choose InvestSmart?
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Powerful features designed for smarter, safer investing.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-5xl mb-4">🛡️</div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Secure & Reliable
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Bank-grade encryption, automated backups, and real-time monitoring to protect your investments.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-5xl mb-4">📊</div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Real-Time Analytics
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Live portfolio tracking, AI-driven insights, and performance reports at your fingertips.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-5xl mb-4">⚡</div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Automated Tools
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Set rules once, let smart automation handle rebalancing and alerts.
        </p>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Temporary debug counter */}
      <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
        Test count: {count}
      </div>
    </div>
  );
}

export default App;