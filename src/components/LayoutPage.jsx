import { Outlet } from "react-router"
import Navbar from "./Navbar"
import FooterSection from "./FooterSection"
import ScrollToTop from "../utils/scroll"
import { useState } from "react"
import MobileMenu from './mobileMenu'

function Layout() {
      const [showMobileMenu, setShowMobileMenu] = useState(false)
      
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
        {/* overlay*/}
    {showMobileMenu && (
    <div className="fixed inset-0 z-30 bg-black/50 md:hidden" 
          
    />
    )}
    {/* mobile menu*/}
    {showMobileMenu && (
        <div className="fixed top-20 right-0 left-0 z-40 md:hidden">
            <MobileMenu setShowMobileMenu={setShowMobileMenu} />
        </div>
    )}
      <main className={`${showMobileMenu? "pointer-events-none": ""}` }>
        <ScrollToTop/>
        <Outlet />
        <FooterSection />
      </main>
    </div>
  )
}

export default Layout
