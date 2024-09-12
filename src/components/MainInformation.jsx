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
                    <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis repellat, culpa officiis ad deserunt asperiores odio optio animi unde est praesentium saepe numquam a ducimus doloribus repudiandae minima veniam!</p>
                    <div className='flex justify-center mt-6'>
                        <button className='bg-black p-2 text-white rounded-md'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInformation