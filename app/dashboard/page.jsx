import { UserButton } from '@clerk/nextjs'
import AddInterview from './_component/AddInterview'
import React from 'react'
import InterviewList from './_component/InterviewList'

const DashboardPage= () => {
  return (
    <div className='mt-5'>
      
      <h2 className='font-bold text-3xl text-blue-400'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start your Mock Up Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5 mb-12'>
        <AddInterview/>
      </div>

      {/* Interview List */}

      <InterviewList/>

    </div>


  )
}

export default DashboardPage