import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black p-4 flex items-center justify-between'>
       <div className="logo flex gap-2 items-center text-white text-xs">
         <Link to="/">
         <a href="" className='border-r-2 p-1 border-gray-700'>Abstract</a>
         </Link>
         <a href="">Help</a>
      </div>

      <div className="right">
       <Link to="/addCards">
        <a href="#" className='p-2 text-xs bg-black text-white rounded-md border-white border'>Submit a request</a>
       </Link>
       </div>
    </div>
  )
}

export default Header