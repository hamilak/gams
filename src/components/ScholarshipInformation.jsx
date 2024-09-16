import React from 'react'
import BackgroundImage from '../assets/AnimatedShape.svg'
import { Divider } from 'rsuite'
import ApplyButton from './ApplyButton'

const ScholarshipInformation = () => {
    const handleApply = () => {
        window.location.href = import.meta.env.VITE_APP_URL
    }

    return (
        <div className='my-20'>
            <Divider className='font-bold text-3xl md:text-5xl'>Application Information</Divider>
            <div className='mt-20'>
                <div className='lg:flex justify-between m-10'>
                    <div className='w-full lg:w-4/5'>
                        <p className='text-base md:text-lg'>The main objective of the scholarship program is to provide succor/support to some students within these three (3) local government areas with a view to reducing out-of-school phenomenon, improving retention, and strengthening other educational outcomes. This will eventually enhance human capital development and fast-track the economic transformation of Remo land, in particular, and Ogun State in general. </p>
                        <div>
                            <div>
                                <div className='flex items-center'>
                                    <img width="100" height="100" src="https://img.icons8.com/clouds/100/important-time.png" alt="important-time" />
                                    <p className='text-lg text-red-600 font-bold'>Deadline: September 27, 2024</p>
                                </div>
                                <div className='flex items-center'>
                                    <img width="100" height="100" src="https://img.icons8.com/clouds/100/checked--v1.png" alt="checked--v1" />
                                    <p className='font-bold text-lg text-green-700'>All students from the listed local governments can apply</p>
                                </div>
                                <div className='flex items-center'>
                                    <img width="100" height="100" src="https://img.icons8.com/clouds/100/precious--month.png" alt="precious--month" />
                                    <p className='font-bold text-lg text-orange-700'>Beneficiaries must be between age 6 and 25</p>
                                </div>
                                <div className='flex justify-center mt-4 mb-8'>
                                    <ApplyButton handleApply={handleApply} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='flex text-center w-full lg:w-3/5 min-h-96 p-6 justify-center bg-blue-800 rounded-md m-2
                    '>
                        <div className='leading-8'>
                            <h6 className='text-white text-lg text-center border-b border-b-gray-400 mb-2 pb-2'>Mode of application</h6>
                            <ul className='text-white list-decimal list-inside text-left'>
                                <li className='text-base md:text-lg mb-4'>
                                    Would-be beneficiaries for Primary, Secondary and Technical Colleges would be determined in collaboration with the State Ministry of Education Science and Technology using the Cumulative Promotion Examination Result obtainable from the OGSERA Platform
                                </li>
                                <li className='text-base md:text-lg mb-4'>
                                    Beneficiaries for Tertiary Education level would be required to first complete an Online Application Form downloadable through a designated online portal.
                                </li>
                                <li className='text-base md:text-lg mb-4'>Application Forms for Primary, Secondary and Technical College must be endorsed by Parents/Guardian or School Head teacher/Principal for Public
                                </li>
                                <li className='text-base md:text-lg mb-4'>Application for Tertiary level applicants must be submitted with evidence of Local Government Origin, JAMB Admission Details.
                                </li>
                                <li className='text-base md:text-lg mb-4'>The applications are then collated for review after the set deadline.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScholarshipInformation