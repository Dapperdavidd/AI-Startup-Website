import { useState } from 'react'
import logo from '../../assets/Main_logo.svg'
import menuIcon from '../../assets/list_menu.svg'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="flex justify-between items-center h-[74px] bg-transparent relative w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 z-50">
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute inset-0 -m-2 bg-purple-500/50 blur-xl rounded-full"></div>
          <div className="absolute inset-0 -m-1 bg-purple-400/30 blur-lg rounded-full"></div>
          <img 
            className="relative h-[38px] w-[38px] rounded-full drop-shadow-2xl"
            src={logo} 
            alt="logo"
          />
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center gap-5 lg:gap-7 xl:gap-8 absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-1.5 text-gray-300 hover:text-white cursor-pointer transition-colors text-sm lg:text-base font-medium">
          <span>Features</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm lg:text-base font-medium">Developers</p>
        <div className="flex items-center gap-1.5 text-gray-300 hover:text-white cursor-pointer transition-colors text-sm lg:text-base font-medium">
          <span>Company</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm lg:text-base font-medium">Blog</p>
        <p className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm lg:text-base font-medium">Changelog</p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-medium text-sm sm:text-base hover:from-purple-500 hover:to-purple-400 transition-all shadow-lg shadow-purple-500/50 whitespace-nowrap">
          Join waitlist
        </button>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <img 
            src={menuIcon} 
            alt="menu" 
            className="w-6 h-6 invert"
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[74px] left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-gray-800 md:hidden z-50 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-800">
              <span className="text-gray-300">Features</span>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p className="text-gray-300 py-2 border-b border-gray-800 cursor-pointer hover:text-white">
              Developers
            </p>
            <div className="flex items-center justify-between py-2 border-b border-gray-800">
              <span className="text-gray-300">Company</span>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p className="text-gray-300 py-2 border-b border-gray-800 cursor-pointer hover:text-white">
              Blog
            </p>
            <p className="text-gray-300 py-2 border-b border-gray-800 cursor-pointer hover:text-white">
              Changelog
            </p>
            <button className="mt-4 py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-purple-400 transition-all shadow-lg shadow-purple-500/50">
              Join waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar