function Dashboard() {
  return (
    <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Site Overview</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-400 text-xs">www.website.com</span>
                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 text-sm font-medium">
                  <span>Site Overview</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-lg text-sm transition-colors">
                  Analytics
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-lg text-sm transition-colors">
                  Smart Keyword Generator
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-lg text-sm transition-colors">
                  Goals
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-lg text-sm transition-colors">
                  Content Evaluation
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-lg text-sm transition-colors">
                  Backlink Audit
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 rounded-lg text-sm transition-colors">
                  Link Optimization Wizard
                </a>
              </nav>
            </div>
          </aside>

          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Site Overview</h2>
                <div className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm">www.website.com</p>
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-transparent border-none outline-none text-gray-300 text-sm w-32"
                  />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg flex items-center justify-center cursor-pointer hover:from-purple-500 hover:to-purple-400 transition-all">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <span>Jun 24</span>
              <span className="text-purple-400">→</span>
              <span>Today</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 text-sm font-medium">Visibility</h3>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-white">10.15%</span>
                    <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">+5.6%</span>
                  </div>
                </div>
                <div className="h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="visibilityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,80 Q 50,70 100,65 T 200,55 T 300,50"
                      fill="url(#visibilityGradient)"
                      stroke="none"
                    />
                    <path
                      d="M 0,80 Q 50,70 100,65 T 200,55 T 300,50"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                    />
                    <circle cx="200" cy="55" r="4" fill="#8B5CF6" />
                  </svg>
                  <div className="absolute top-2 left-2 bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-300 border border-gray-700">
                    Jun 18 • Visibility 9.8%
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 text-sm font-medium">Organic Keywords</h3>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-white">35.6K</span>
                    <span className="text-sm font-semibold text-red-400 bg-red-400/10 px-2 py-0.5 rounded">-2.5%</span>
                  </div>
                </div>
                <div className="h-32 flex items-end">
                  <div className="w-full h-20 bg-gradient-to-t from-purple-500/20 to-transparent rounded-t"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <h3 className="text-gray-400 text-sm font-medium mb-4">Top Keywords</h3>
                <ul className="space-y-3">
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>online payment processing</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>secure transactions</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>online transaction platform</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>online shopping payments</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>e-commerce payment gateway</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>B2B payment processing</span>
                  </li>
                  <li className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>safe online payments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 text-sm font-medium">Traffic</h3>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-white">59.8K</span>
                    <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">+10.7%</span>
                  </div>
                </div>
                <div className="h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="trafficGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,85 Q 75,75 150,60 T 300,45"
                      fill="url(#trafficGradient)"
                      stroke="none"
                    />
                    <path
                      d="M 0,85 Q 75,75 150,60 T 300,45"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard

