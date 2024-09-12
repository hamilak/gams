import React from 'react'
import BackgroundImage from '../assets/AnimatedShape.svg'
import { Divider } from 'rsuite'

const ScholarshipInformation = () => {
    return (
        <div>
            <Divider className='font-bold text-5xl'>Application Information</Divider>
            <div className='m-10'>
                <div className='md:flex justify-between items-center'>
                    <div className='w-4/5'>
                        <p className='text-lg'>The main objective of the scholarship program is to provide succor/support to few “indigent” students within these three (3) local government areas with a view to reducing out-of-school phenomenon, improving retention, and strengthening other educational outcomes. This will eventually enhance human capital development and fast-track the economic transformation of Remo land, in particular, and Ogun State in general. </p>
                        <div className='flex justify-center items-center'>
                            <img width="100" height="100" src="https://img.icons8.com/clouds/100/important-time.png" alt="important-time" />
                            <p className='text-lg text-red-600 font-bold'>Deadline: October 7, 2024</p>

                        </div>
                        <div className='flex justify-center items-center'>
                            <img width="100" height="100" src="https://img.icons8.com/bubbles/100/ok.png" alt="ok" />
                            <p className='font-bold text-lg'>All students can apply</p>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button className='font-bold px-6 py-4 rounded-md bg-green-700 text-white text-lg'>Apply Now!</button>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='flex items-center text-center w-3/5 min-h-96 p-6 justify-center bg-sky-800 rounded-md m-2
                    '>
                        <div className='leading-7'>
                            <h6 className='text-white text-left'>Mode of application:</h6>
                            <ul className='text-white list-decimal list-inside text-left'>
                                <li>
                                    Would-be beneficiaries for Primary, Secondary and Technical Colleges would be determined in collaboration with the State Ministry of Education Science and Technology using the Cumulative Promotion Examination Result obtainable from the OGSERA Platform
                                </li>
                                <li>
                                    Beneficiaries for Tertiary Education level would be required to first complete an Online Application Form downloadable through a designated online portal.
                                </li>
                                <li>Application Forms for Primary, Secondary and Technical College must be endorsed by Parents/Guardian or School Head teacher/Principal for Public
                                </li>
                                <li>Application for Tertiary level applicants must be submitted with evidence of Local Government Origin, JAMB Admission Details.
                                </li>
                                <li>The applications are then collated for review after the set deadline.
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