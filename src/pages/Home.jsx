import React from 'react'
import Logo from '../assets/Logo.png'
import MainInformation from '../components/MainInformation'
import About from '../components/About'
import ScholarshipInformation from '../components/ScholarshipInformation'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='m-2'>
            <nav className='flex justify-center items-center'>
                <ul className='flex items-center gap-10 cursor-pointer'>
                    <li className='hover:text-orange-500'>Home</li>
                    <li className='hover:text-orange-500'>About</li>
                    <div>
                        <img src={Logo} alt="GAMS" width={100} height={100} />
                    </div>
                    <li className='hover:text-orange-500'>Contact</li>
                    <li className='hover:text-orange-500'>Apply</li>
                </ul>
            </nav>
            <div>
                <MainInformation />
                <About />
                <ScholarshipInformation />
                <Footer />
            </div>
        </div>
    )
}

export default Home