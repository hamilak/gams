import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
    const handleApply = () => {
        window.location.href = import.meta.env.VITE_APP_URL
    }
    return (
        <div className='flex gap-10 h-30 bg-blue-800 p-10'>
            <div>
                <div className='flex justify-center'>
                    <img src={Logo} alt="Logo" width={100} height={100} />
                </div>
                    
                <h5 className='text-white'>Gbemiga Abiodun Education Program</h5>
            </div>
            <div>
                <ul className='text-white space-y-4'>
                    <li onClick={handleApply} className='hover:text-orange-500 cursor-pointer'>Apply</li>
                    <li className='hover:text-orange-500 cursor-pointer'>About</li>
                    <li className='hover:text-orange-500 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer