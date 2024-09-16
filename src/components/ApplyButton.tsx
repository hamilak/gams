import React from 'react'

const ApplyButton = ({ handleApply }) => {
    return (
        <div><button onClick={handleApply} className='font-bold px-6 py-4 rounded-md hover:bg-blue-900 bg-blue-600 text-white text-lg'>Apply Now!</button></div>
    )
}

export default ApplyButton