import logo from '../../assets/Main_logo.svg'

function Navbar(){

  return(
    <nav className="flex justify-between border border-gray-700 h-[74px] items-center " >
      
      <div>
        <img 
          className="sm:ml-[40px] ml-[30px] mr-[20px] h-[38px]  "
          src={logo} 
          alt="logo"
        />
      </div >

      <div className="flex justify-between border border-gray-300  md:w-[512px] h-[42px] hidden sm:flex rounded-full px-[30px] items-center">
        <p className='mr-[20px] text-gray-400 w-fit whitespace-nowrap'>Features <select></select></p>
        <p className='mr-[20px] text-gray-400 '>Developers</p>
        <p className='mr-[20px] text-gray-400 w-fit whitespace-nowrap'>Company <select></select></p>
        <p className='mr-[20px] text-gray-400 '>Blog</p>
        <p className='text-gray-400'>Changelog</p>
      </div>

      <div>
          <p className='mr-[30px] sm:mr-[40px] ml-[30px] whitespace-nowrap'>Join Waitlist</p>
      </div>
    </nav>
  )
}
export default Navbar