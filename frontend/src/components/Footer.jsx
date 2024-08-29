import React from 'react'

const Footer = () => {
  return (
    <div className='footer-section mt-20 bg-black w-full text-white pt-10 pb-10'>
      <div className='container flex flex-wrap  m-auto justify-around'>
        <ul className='text-xs font-normal  h-[200px] hover:cursor-pointer'>
          <li className='text-xl font-medium mb-4'>Abstract</li>
          <li>Branches</li>
        </ul>

        <ul className='text-xs font-normal  h-[200px] hover:cursor-pointer'>
          <li className='text-xl font-medium mb-4'>Resources</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>

        <ul className='text-xs font-normal  h-[200px] hover:cursor-pointer'>
          <li className='text-xl font-medium mb-4'>Community</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>

        <ul className='text-xs font-normal  h-[200px] hover:cursor-pointer'>
          <li className='text-xl font-medium mb-4'>Company</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Legal</li>
          <li className='text-xl font-medium mt-4'> Contact Us</li>
          <li>Info@abstract.com</li>
        </ul>

        <ul className='text-xs font-normal  h-[200px] hover:cursor-pointer flex flex-col justify-end'>
          <li className='text-xl font-medium'> ©️ Copyright 2022</li>
          <li>Abstract Studio Design inc</li>
          <li>All rights reserves</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer