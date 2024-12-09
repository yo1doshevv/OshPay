import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AppRoutes from '../Ui/Router/Routes'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
       
    </div>
  )
}

export default Layout