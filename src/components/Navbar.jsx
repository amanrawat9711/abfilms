import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logo } from '../assets/assets'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
      { name: 'Artist Directory', path: '/films' },
    { name: 'Profile', path: '/profile' },
    { name: 'Events', path: '/events' },
    { name: 'Carrier', path: '/carrier' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center p-4 lg:px-10">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-28" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 text-md items-center text-black">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-black'
                  : 'hover:text-gray-600 transition'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-4 text-black bg-white shadow-md">
          {navLinks.map((link) => (
           <NavLink
           key={link.path}
           to={link.path}
           onClick={() => setMenuOpen(false)}
           className={({ isActive }) =>
            `px-2 py-1 w-fit inline-flex ${
              isActive ? 'border-b-2 border-black' : ''
            }`
          }
         >
           {link.name}
         </NavLink>
         
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
