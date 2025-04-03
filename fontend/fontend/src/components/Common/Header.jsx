import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
         <header className='border-b border-gray-200 '>
         {/* Topbar */}
         <Topbar />
         
         {/* navbar */}
         <Navbar />
         {/* cart Drawer */}
         </header>

    </div>
  )
}

export default Header
