import React from 'react'
import { Divider } from 'rsuite'

const Criteria = () => {
    return (
        <div className='m-10'>
            <Divider className='font-bold text-5xl'>Eligibility Criteria</Divider>
            <div className='mt-16'>
                <p className='text-center text-lg'>To be eligible for this scholarship, applicants must meet the following criteria:</p>
                <div>
                    <ul className='list-disc list-inside p-8 space-y-3'>
                        <li className='bg-blue-900 p-2 text-white text-base'>Prospective beneficiaries must be pupils/students enrolled or seeking enrolment into any Public Primary, Secondary Schools, Technical Colleges or Tertiary Institutions in Nigeria
                        </li>
                        <li className='bg-blue-900 p-2 text-white text-base'>Must be an indigene or resident of Ikenne, Remo North and Sagamu Local Government Areas
                        </li>
                        <li className='bg-blue-900 p-2 text-white text-base'>Beneficiaries must be within the age bracket of 6-25 years.
                        </li>
                        <li className='bg-blue-900 p-2 text-white text-base'>Must have a personal account with a commercial bank monitored by the parent or a guardian.
                        </li>
                        <li className='bg-blue-900 p-2 text-white text-base'>Would be beneficiaries in Primary, Secondary and Technical Colleges must be able to maintain a good performance/grade not less than 70%
                        </li>
                        <li className='bg-blue-900 p-2 text-white text-base'>A Cumulative Grade Point Average (CGPA) not less than 3.5 (for students in tertiary institutions) to keep their scholarship after the first year.
                        </li>
                        <li className='bg-blue-900 p-2 text-white text-base'>Any grade less than the required percentage/CGPA will result in disqualification from the scholarship program.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Criteria