import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Sidebar/>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Layout