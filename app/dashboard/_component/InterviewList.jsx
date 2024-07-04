'use client'
import { db } from '@/utils/db';
import { MockPreparation } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewCard from './InterviewCard';

const InterviewList = () => {

    const  {user} = useUser();
    const [interviewList, setInterviewList] = useState([]);

    useEffect(() => {
        user&&GetInterviewList();
    }, [user])

    const GetInterviewList = async() => {
        const result = await db.select()
        .from(MockPreparation)
        .where(eq(MockPreparation.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockPreparation.id))

        console.log(result);
        setInterviewList(result);
    }
  return (
    <div>
        <h2 className='font-medium text-xl text-white'>Previous Mock Interview</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList&&interviewList.map((interview, index) => (
                <InterviewCard key={index} interview={interview}/>
            ))}
        </div>
    </div>
  )
}

export default InterviewList