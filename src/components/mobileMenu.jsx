import { Link, useLocation, useNavigate } from "react-router";

function MobileMenu({setShowMobileMenu}){
  const navigate = useNavigate()
  const locatinon = useLocation()

    const handleWhyUsClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('why-choose-us')?.scrollIntoView({behavior:'smooth'})
            setShowMobileMenu(false)
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('why-choose-us')?.scrollIntoView({behavior:"smooth"})
            setShowMobileMenu(false)
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
    const handleAboutClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('about')?.scrollIntoView({behavior:'smooth'})
            setShowMobileMenu(false)
            return;
        }
        
        navigate('/')
        
        const timer = setTimeout(()=>{
            document.getElementById('about')?.scrollIntoView({behavior:"smooth"})
            setShowMobileMenu(false)
            
            
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
    const handleFaqClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('faq')?.scrollIntoView({behavior:'smooth'})
            setShowMobileMenu(false)
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            setShowMobileMenu(false)
            document.getElementById('faq')?.scrollIntoView({behavior:"smooth"})

        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
    const handleContactClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
            setShowMobileMenu(false)
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
            setShowMobileMenu(false)
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
    const handleEmergencyClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('emergency')?.scrollIntoView({behavior:'smooth'})
            setShowMobileMenu(false)
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('emergency')?.scrollIntoView({behavior:"smooth"})
            setShowMobileMenu(false)
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
  const handleBookingClick =()=>{
    setShowMobileMenu(false)
  }
const menuItems = [
  { name:"Home", to:'/'},
  { name: "Services", to: "/services" },
  { name: "Location", to: "/location" },
  { name: "About", to: null, handleFunction: handleAboutClick },
  { name: "Why Us", to: null, handleFunction: handleWhyUsClick },
  { name: "FAQ", to: null, handleFunction: handleFaqClick },
  { name: "Emergency", to: null, handleFunction: handleEmergencyClick },
  { name: "Contact", to: null, handleFunction: handleContactClick },
];
return(
  <div className=" bg-white md:hidden">
    <div className="flex flex-col h-full px-6 py-8">
    {/* Menu Items */}
    <nav className="flex flex-col gap-1">

      {menuItems.map((item) => (
        item.to ? (
          <Link
            key={item.name}
            to={item.to}
            className="px-5 py-2  rounded-2xl bg-bg-soft border border-primary/10 text-dark font-heading font-medium hover:bg-primary/5 transition"
          >
            {item.name}
          </Link>
        ) : (
          <button
            key={item.name}
            onClick={item.handleFunction}
            className="text-left px-5 py-2 rounded-2xl bg-bg-soft border border-primary/10 text-dark font-heading font-medium hover:bg-primary/5 transition"
          >
            {item.name}
          </button>
        )
      ))}

    </nav>

    {/* Bottom CTA */}
    <div className="mt-auto pt-8">
      <Link
        to="/booking"
        className="block w-full text-center py-2 px-2 rounded-full bg-cta text-black  tracking-widest shadow-lg"
        onClick={handleBookingClick}
      >
        Book Appointment
      </Link>
    </div>

  </div>
</div>
    )
}
export default MobileMenu;