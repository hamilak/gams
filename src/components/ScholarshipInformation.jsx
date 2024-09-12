import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Divider } from 'rsuite'

const ScholarshipInformation = () => {
    return (
        <div>
            <Divider className='font-bold text-5xl'>Application Information</Divider>
            <div className='m-10'>
                <div className=''>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis perspiciatis iure cupiditate aspernatur animi dignissimos aut facilis numquam reiciendis, porro itaque eveniet dolorum eius modi praesentium tempora. Ipsum, quia tempora.</p>
                    </div>
                    <div className='w-48 h-48 bg-green-800'>
                        <p className='font-bold text-lg text-white text-center'>October 7, 2024</p>
                        <button className=''>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScholarshipInformation