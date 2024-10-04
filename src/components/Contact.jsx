import React from 'react'
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>

       <motion.div 
       whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
        className='flex gap-4 items-center m-8 justify-center text-2xl'>
            <a href="https://www.linkedin.com/in/sumit-kumar-60323a243" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full transition-transform duration-300 hover:scale-125 hover:bg-blue-100 hover:text-blue-600">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Sumitkrsahu7" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full transition-transform duration-300 hover:scale-125 hover:bg-gray-200 hover:text-gray-800">
                <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full transition-transform duration-300 hover:scale-125 hover:bg-blue-100 hover:text-blue-500">
                <FaSquareXTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full transition-transform duration-300 hover:scale-125 hover:bg-pink-100 hover:text-pink-500">
                <FaInstagram />
            </a>
        </motion.div>
      
      <motion.div className='text-center tracking-tighter'>
        <motion.p
         whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
         className='my-4'>{CONTACT.address}</motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
         className='my-4'>{CONTACT.phoneNo}</motion.p>
        <a href='sumitkrsahu7@gmail.com' className='border-b'>{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Contact