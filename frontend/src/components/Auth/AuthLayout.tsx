import React from 'react'
import LoginSignupNavbar from '../navbar/LoginSignupNavbar'
import LoginSignupFooter from '../footer/LoginSignupFooter'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='flex flex-col border-double h-screen w-screen justify-between'>
      <div >
          <LoginSignupNavbar />
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row items-center" style={{background:"linear-gradient(90deg, #332255 0%, #332255 100%)"}}>
        <Outlet />
      </div>
      <div>
        <LoginSignupFooter />
      </div>
    </div>
  )
}

export default AuthLayout;