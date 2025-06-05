"use client"

interface SplashProps {
  fact: string
}

export function SplashPage({ fact }: SplashProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
      <div className="text-center text-white p-8 max-w-2xl">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="mx-auto mb-6 w-20 h-20 rounded-full shadow-lg"
        />
        {/* Spinner and welcome */}
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-4xl font-bold mb-2">Welcome</h1>
          <p className="text-xl opacity-90">Loading portfolio...</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="text-lg font-semibold mb-2">💡 Did you know?</h3>
          <p className="text-sm opacity-90 leading-relaxed">{fact}</p>
        </div>
      </div>
    </div>
  )
}
