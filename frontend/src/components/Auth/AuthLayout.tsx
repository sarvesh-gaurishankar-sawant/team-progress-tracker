import React from 'react'
import LoginSignupNavbar from '../navbar/LoginSignupNavbar'
import LoginSignupFooter from '../footer/LoginSignupFooter'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <>
      <LoginSignupNavbar />
      <LoginSignupFooter />
      <Outlet />
    </>
  )
}

export default AuthLayout