import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./Navbar"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <Link to="/" className='logo'>
            <img src="/images/logo.jpg" width={40} height={40} alt="Ayham Aldarwish" />
          </Link>
        </h1>
        <div className="relative md:justify-self-center">
          <button className='menu-btn md:hidden' onClick={() => setNavOpen ((prev) => !prev)}>
          <span className="material-symbols-rounded" >
            {navOpen ? <IoClose /> : <IoMdMenu />}
          </span>
          </button>

          <Navbar navOpen={navOpen}/>
        </div>
        <Link to="/#contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>Contact Me</Link>
      </div>
    </header>
  )
}

export default Header
