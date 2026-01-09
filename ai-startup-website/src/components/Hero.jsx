function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/20"></div>
      
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-12">
        <div className="mb-8 inline-block">
          <span className="px-5 py-2 bg-purple-950/60 backdrop-blur-sm border border-purple-800/40 rounded-full text-purple-300 text-sm font-medium shadow-lg shadow-purple-900/20">
            NEW Latest integration just arrived
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-[1.1] tracking-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Boost your rankings
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
            with AI.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
        </p>

        <button className="px-10 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold text-base sm:text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transform hover:scale-105 active:scale-100">
          Start for free
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
    </section>
  )
}

export default Hero

