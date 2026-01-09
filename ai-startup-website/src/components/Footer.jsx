function Footer() {
  const companyLogos = [
    { name: 'Company 1', width: 120 },
    { name: 'Company 2', width: 100 },
    { name: 'Company 3', width: 110 },
    { name: 'Company 4', width: 130 },
    { name: 'Company 5', width: 105 },
    { name: 'Company 6', width: 115 },
  ]

  return (
    <footer className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-base sm:text-lg font-medium">
            Trusted by the world's most innovative teams.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-24 sm:w-28 h-8 bg-gray-800/50 border border-gray-700/50 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs font-medium">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

