import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { close, menu } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../style'



const Navbar = () =>
{
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >

    </nav>
  )
}

export default Navbar