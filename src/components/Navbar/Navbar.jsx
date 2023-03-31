import React, { useState } from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // show nav menu
    const showNav = ()=> {
        setActive('navBar activeNavbar')
    }
    // remove navmenu
    const removeNav = ()=> {
        setActive('navBar')
    }
  return (
    <div>
        <section className='NavBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className='logo'>
                        <h1><MdOutlineTravelExplore className='icon'/> Travel.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItems'>
                            <a href="#" className='navLink'>Home</a>
                        </li>
                        <li className='navItems'>
                            <a href="#" className='navLink'>Packages</a>
                        </li>
                        <li className='navItems'>
                            <a href="#" className='navLink'>Shop</a>
                        </li>
                        <li className='navItems'>
                            <a href="#" className='navLink'>About</a>
                        </li>
                        <li className='navItems'>
                            <a href="#" className='navLink'>Pages</a>
                        </li>
                        <li className='navItems'>
                            <a href="#" className='navLink'>News</a>
                        </li>
                        <li className='navItems'>
                            <a href="#" className='navLink'>Contact</a>
                        </li>
                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={removeNav} className='closeNavBar'>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavBar">
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    </div>
  )
}

export default Navbar