'use client'

import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import { MockPreparation } from '@/utils/schema'
import QuestionSection from '@/app/dashboard/_component/QuestionSection'
import AnswerSection from '@/app/dashboard/_component/AnswerSection'

const StartInterview = ({ params }) => {

    const [interviewData, setInterviewData] = useState(null);
    const [interviewQuestion, setInterviewQuestion] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);

    useEffect(() => {
        GetInterviewDetails();
    }, [params.interviewId]) // Ensure it runs when interviewId changes

    const GetInterviewDetails = async() => {
        try {
            const result = await db.select().from(MockPreparation)
                .where(eq(MockPreparation.mockId, params.interviewId));

            if (result && result.length > 0) {
                const jsonMockResp = JSON.parse(result[0].jsonMockResp);
                console.log(jsonMockResp)
                setInterviewQuestion(jsonMockResp)
                setInterviewData(result[0])
            } else {
                console.error("No data found for the given interview ID");
            }
        } catch (error) {
            console.error("Error fetching interview details:", error);
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <QuestionSection interviewQuestion={interviewQuestion}
            questionIndex={questionIndex}
            />

            <AnswerSection/>
        </div>
    )
}

export default StartInterview
