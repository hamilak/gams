import React from 'react';
import BackgroundImage from '../assets/image.jpg';

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
                className="relative bg-cover bg-top bg-no-repeat flex items-center sm:bg-none bg-gray-800"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    maxWidth: '1680px',
                    height: '700px',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className='relative px-10 w-full flex justify-center'>
                    <div className='w-1/2 text-center'>
                        <h3 className="text-5xl text-white font-semi uppercase">Gbemiga Abiodun Memorial Scholarship</h3>
                        <p className="font-semibold text-white mt-4">An educational support scheme by Prince Dapo Abiodun for indigent students in selected local government areas in Ogun State.</p>
                        <div className='flex justify-center gap-10 mt-6'>
                            <button onClick={handleLearnMoreClick} className='hover:bg-blue-400 bg-white p-3 text-black rounded-md font-bold'>Learn More</button>
                            <button onClick={handleApply} className='hover:bg-blue-900 bg-blue-600 p-3 text-white rounded-md font-bold'>Apply Now!</button>
                        </div>
                        <div className=' mt-4'>
                            <p className='text-white font-bold'>Deadline for application: September 27, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInformation;
