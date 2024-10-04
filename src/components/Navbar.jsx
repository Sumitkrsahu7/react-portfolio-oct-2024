import React from 'react'
import logo from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-20' src={logo} alt='logo'/>
        </div>
        <div className='flex gap-4 items-center m-8 justify-center text-2xl'>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-800">
                <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaSquareXTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar