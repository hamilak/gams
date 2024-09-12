import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Divider } from 'rsuite'

const ScholarshipInformation = () => {
    const navigate = useNavigate()

    const handleNavigateScholarshipPage = () => navigate('/scholarship')
    return (
        <div>
            <Divider className='font-bold'>INFORMATION</Divider>
            <div className='m-10'>
                <h5>Gbemiga Abiodun Memorial Scholarship Award</h5>
                <h6>Rationale for the program</h6>
                <p>The main objective of the scholarship program is to provide succor/support to few “indigent” students within these three (3) local government areas with a view to reducing out-of-school phenomenon, improving retention, and strengthening other educational outcomes. This will eventually enhance human capital development and fast-track the economic transformation of Remo land, in particular, and Ogun State in general.</p>
                <h6>Criteria for Selection:</h6>
                <div>
                    <p>The following are the eligibility criteria for selection of would-be beneficiaries of the scholarship program.
                        i.Prospective beneficiaries must be pupils/students enrolled or seeking enrolment into any Public Primary, Secondary Schools, Technical Colleges or Tertiary Institutions in Nigeria ... <span onClick={handleNavigateScholarshipPage} className='text-blue-500 cursor-pointer'>Read More</span></p>
                    
                </div>
            </div>
        </div>
    )
}

export default ScholarshipInformation