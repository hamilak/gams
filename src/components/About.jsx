import React from 'react'
import { Divider } from 'rsuite'
import GovandBoy from '../assets/govandboy.jpg'

const About = () => {
    return (
        <div>
            <div>
                <Divider className='font-bold'>ABOUT</Divider>
            </div>
            <div>
                <div className='lg:flex justify-between gap-20 items-center m-10'>
                    <div className='lg:w-3/5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in sapiente ex nam eius nulla delectus dicta ducimus porro eum. Reprehenderit, neque expedita placeat ex possimus deserunt harum adipisci modi!</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='lg:w-96 w-72' src={GovandBoy} alt="Image" />
                    </div>
                </div>
                <div className='lg:flex flex-row-reverse justify-between gap-20 items-center m-10'>
                    <div className='lg:w-3/5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in sapiente ex nam eius nulla delectus dicta ducimus porro eum. Reprehenderit, neque expedita placeat ex possimus deserunt harum adipisci modi!</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='lg:w-96 w-72' src={GovandBoy} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About