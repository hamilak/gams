import React from 'react';
import Logo from '../assets/Logo.png';
import MainInformation from '../components/MainInformation';
import About from '../components/About';
import ScholarshipInformation from '../components/ScholarshipInformation';
import Footer from '../components/Footer';
import Criteria from '../components/Criteria';

const Home = () => {
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='m-2'>
            <nav className='flex justify-center items-center'>
                <ul className='flex items-center gap-10 cursor-pointer'>
                    <li onClick={() => handleScrollToSection('home')} className='hover:text-orange-500'>Home</li>
                    <li onClick={() => handleScrollToSection('about')} className='hover:text-orange-500'>About</li>
                    <div>
                        <img src={Logo} alt="GAMS" width={100} height={100} />
                    </div>
                    <li onClick={() => handleScrollToSection('contact')} className='hover:text-orange-500'>Contact</li>
                    <li onClick={() => handleScrollToSection('scholarship-information')} className='hover:text-orange-500'>Apply</li>
                </ul>
            </nav>
            <div>
                <section id="home">
                    <MainInformation />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="scholarship-information">
                    <ScholarshipInformation />
                </section>
                <section id="apply">
                    <Criteria />
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
