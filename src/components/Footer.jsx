import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className='h-30 bg-blue-900 p-10'>
        <img src={Logo} alt="Logo" width={100} height={100} />
        <h5 className='text-white'>Gbemiga Abiodun Memorial Scholarship</h5>
    </div>
  )
}

export default Footer