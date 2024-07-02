'use client'

import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import { MockPreparation } from '@/utils/schema'
import QuestionSection from '@/app/dashboard/_component/QuestionSection'
import AnswerSection from '@/app/dashboard/_component/AnswerSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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

        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <QuestionSection 
                    interviewQuestion={interviewQuestion}
                    questionIndex={questionIndex}
                />

                <AnswerSection
                    interviewQuestion={interviewQuestion}
                    questionIndex={questionIndex}
                    interviewData={interviewData}
                />
            </div>
            <div className='flex justify-end gap-6'>
                {questionIndex > 0 &&  
                    <Button onClick={() => setQuestionIndex(questionIndex-1)}>Previous Question</Button> 
                }
               
                {questionIndex != interviewQuestion?.length-1 &&  
                    <Button onClick={() => setQuestionIndex(questionIndex+1)}>Next Question</Button> 
                    
                }
                {questionIndex == interviewQuestion?.length-1 &&  

                    <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
                        <Button onClick>End Interview</Button> 
                    </Link>
                }
            </div>
        </div>

        
    )
}

export default StartInterview
