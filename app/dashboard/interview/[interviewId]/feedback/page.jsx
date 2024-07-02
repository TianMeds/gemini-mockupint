'use client'
import { UserAnswer } from '@/utils/schema'
import React, { useEffect } from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'

const Feedback = ({params}) => {

  useEffect(() => {
    GetFeedback();
  }, [])

  const GetFeedback=async()=>{
     const result =  await db.select()
     .from(UserAnswer)
     .where(eq(UserAnswer.mockIdRef,params.interviewId))
     .orderBy(UserAnswer.id);

     console.log(result)
  }
  return (
    <div className='p-10'>
      <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
      <h2 className='text-2xl font-bold'>Here is your interview Feedback</h2>

      <h2 className='text-blue-700 text-lg my-3'>Your overall interview rating: <strong>7/10</strong></h2>

      <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
    </div>
  )
}

export default Feedback