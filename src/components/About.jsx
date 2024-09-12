import React from 'react'
import { Divider } from 'rsuite'
import GovandBoy from '../assets/govandboy.jpg'
import GovandKids from '../assets/govandkids.jpg'

const About = () => {
    return (
        <div className='my-20'>
            <div>
                <Divider className='text-5xl font-bold'>About the Program</Divider>
            </div>
            <div className='mt-20'>
                <div className='lg:flex justify-between gap-20 items-center m-10'>
                    <div className='flex justify-center'>
                        <img width={800} h src={GovandKids} alt="Image" />
                    </div>
                    <div className='lg:w-1/2 leading-7 text-lg'>
                        <p>His Excellency, Prince Dapo Abiodun CON the Executive Governor of Ogun State decided to initiate a special Scholarship Programme, in memory of his late son, Gbemiga Abiodun, for “indigent” learners of Public Primary and Secondary Schools, Technical College and Tertiary Institutions (as well as Special Needs Learners) within Ikenne, Remo North, and Sagamu Local Government Areas, with a view to providing support to selected learners who are from the aforementioned local government areas of Ogun State.</p>
                        <div className='flex justify-center'>
                            <button className='font-bold px-4 py-2 rounded-md bg-green-700 text-white'>Apply Now!</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About