import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { close, menu, logo } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../style'


const Navbar = () =>
{
  const [active, setActive] = useState('')

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className='flex items-center gap-2 '
          onClick={() => 
          {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <div className="w-9 h-9">
            <img
              src={logo}
              alt="The logo for the page"
              className="w-9 h-9 object-contain"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar