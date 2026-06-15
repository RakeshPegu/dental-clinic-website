import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { Link, NavLink, Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import {Menu} from 'lucide-react'


const Navbar = ({showMobileMenu, setShowMobileMenu}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleMobileMenuIconClick =()=>{setShowMobileMenu((prev)=>!prev)}
    useEffect(()=>{
      if(showMobileMenu){
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight='15px'
         
      }else{
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight='0px'
      }
      return ()=>{
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight='0px'
      }
    }, [showMobileMenu])
    const handleWhyUsClick =()=>{
      if(location.pathname === '/'){
            document.getElementById('why-choose-us')?.scrollIntoView({behavior:'smooth'})
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('why-choose-us')?.scrollIntoView({behavior:"smooth"})
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }

    const handleAboutClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('about')?.scrollIntoView({behavior:'smooth'})
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('about')?.scrollIntoView({behavior:"smooth"})
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
    const handleFaqClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('faq')?.scrollIntoView({behavior:'smooth'})
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('faq')?.scrollIntoView({behavior:"smooth"})
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
    const handleContactClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
    const handleEmergencyClick =()=>{
        if(location.pathname === '/'){
            document.getElementById('emergency')?.scrollIntoView({behavior:'smooth'})
            return;
        }
        navigate('/')
        const timer = setTimeout(()=>{
            document.getElementById('emergency')?.scrollIntoView({behavior:"smooth"})
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }

        
    }
const navItems = [
  { name:"Home", to:'/'},
  { name: "Services", to: "/services" },
  { name: "Location", to: "/location" },
  { name: "About", to: null, handleFunction: handleAboutClick },
  { name: "Why Us", to: null, handleFunction: handleWhyUsClick },
  { name: "FAQ", to: null, handleFunction: handleFaqClick },
  { name: "Emergency", to: null, handleFunction: handleEmergencyClick },
  { name: "Contact", to: null, handleFunction: handleContactClick },
];

 return (
    <>
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
          >
            <Activity
              className="w-6 h-6 text-primary"
              strokeWidth={1.5}
            />

            <span className="font-heading text-2xl font-bold text-dark">
              Serene Smile
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems&&navItems.map((item, index)=>(
                !item.to ? (<Link className='font-heading text-dark hover:text-primary transition' key={index} onClick={item.handleFunction}>
                    {item.name}
                </Link>) :
                (<NavLink key={index} to={item.to} 
                className={({isActive, isPending})=>`font-heading hover:text-primary transition 
                ${isPending ? "opacity-10":''}
                ${isActive ? 'text-muted':"text-dark "}`} >
                    {item.name}
                </NavLink>)
            ))}

          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/booking"
              className="
                px-8 py-4
                rounded-full
                bg-cta
                text-dark
                font-heading
                font-bold
                shadow-lg
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={handleMobileMenuIconClick}>
            <Menu className="w-7 h-7 text-dark" />
          </button>
          

        </div>
      </div>
    </header>   
    
    </>
  );
}

export default Navbar;

