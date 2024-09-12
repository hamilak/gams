import React from 'react'
import BackgroundImage from '../assets/image.jpg'

const MainInformation = () => {
    return (
        <div>
            <div className="bg-cover bg-top bg-no-repeat flex items-center sm:bg-none bg-gray-800" 
                style={{ 
                    backgroundImage: `url(${BackgroundImage})`,
                    maxWidth: '1680px', 
                    height: '700px' 
                }}>
                <div className='px-10 md:w-3/5 sm:w-full w-4/5'>
                    <h3 className="text-5xl text-white font-semi uppercase">Gbemiga Abiodun Memorial Scholarship</h3>
                    <p className="text-white mt-4">An educational support scheme by Prince Dapo Abiodun for indigent students in selected local government areas in Ogun State.</p>
                    <div className='flex justify-center gap-10 mt-6'>
                        <button className='bg-black p-2 text-white rounded-md'>Learn More</button>
                        <button className='bg-green-600 p-2 text-white rounded-md'>Apply Now</button>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <p className='text-red-500 font-bold'>Deadline for application: October 7, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInformation