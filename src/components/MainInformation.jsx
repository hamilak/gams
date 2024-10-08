import React from 'react';
import BackgroundImage from '../assets/Logo.png';

const MainInformation = () => {
    const handleLearnMoreClick = () => {
        const scholarshipSection = document.getElementById('about');
        if (scholarshipSection) {
            scholarshipSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleApply = () => {
        window.location.href = import.meta.env.VITE_APP_URL
    }

    return (
        <div>
            <div
                className="relative bg-contain bg-center bg-no-repeat flex items-center sm:bg-none bg-blue-950"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    maxWidth: '1680px',
                    height: '700px',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className='relative px-10 w-full flex justify-center'>
                    <div className='w-full md:w-1/2 text-center'>
                        <h3 className="text-base md:text-5xl text-white font-bold uppercase">Gbemiga Abiodun Education Program</h3>
                        <p className="font-semibold md:text-lg text-xs text-white mt-4">An educational support scheme by Prince Dapo Abiodun for indigent students in selected local government areas in Ogun State.</p>
                        <div className='flex justify-center gap-10 mt-6'>
                            <button onClick={handleLearnMoreClick} className='hover:bg-blue-900 hover:text-white bg-white md:text-base text-xs p-2 md:p-3 text-black rounded-md font-bold'>Learn More</button>
                            <button onClick={handleApply} className='hover:bg-blue-900 bg-blue-600 text-white rounded-md md:text-base text-xs p-2 md:p-3 font-bold'>Apply Now!</button>
                        </div>
                        <div className=' mt-4'>
                            <p className='md:text-lg text-xs text-white font-bold'>Deadline for application: September 27, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInformation;
