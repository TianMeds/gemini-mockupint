'use client'
import React, {useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiModel';
import { LoaderCircle } from 'lucide-react';
import { MockPreparation } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { db } from '@/utils/db';
import { useRouter } from 'next/navigation';
  

const AddInterview = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDescription, setJobDescription] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] =useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const {user} = useUser();
    const router = useRouter();
 
    const onSubmit =async(e) => {
        setLoading(true);
        e.preventDefault();
        console.log(jobPosition, jobDescription, jobExperience)

        const inputPrompt ="Job Position: "+jobPosition+", Job Desription: "+jobDescription+". Years of Experience: "+jobExperience+" Now create me a 5 question for a mockup interview about this position give us the answer in JSON Format give me the question on JSON"
    
        const result = await chatSession.sendMessage(inputPrompt);
        const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '')
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);

        if(MockJsonResp) { 
            const resp = await db.insert(MockPreparation)   
            .values({
                mockId: uuidv4(),
                jsonMockResp: MockJsonResp,
                jobPosition: jobPosition,
                jobDescription: jobDescription,
                jobExperience: jobExperience,
                createdBy:user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format("MM-DD-yyyy")
            }).returning({mockId:MockPreparation.mockId})
    
            console.log(resp)
            if(resp){
                setOpenDialog(false);
                router.push('/dashboard/interview/'+resp[0]?.mockId)
            }

        }

        else {
            console.log("Error")
        }

    
    }

  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={() => setOpenDialog(true)}>
            <h2 className='text-lg text-center'>+ Add New</h2>
        </div>

        <Dialog open={openDialog}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                <DialogTitle className="text-2xl">Tell us more about your upcoming job interview</DialogTitle>
                <DialogDescription>
                    <form onSubmit={onSubmit}>
                        <div>
                            <h2>Add details about your job/position, job description and your years of experience</h2>

                            <div className='mt-7 my-3'>
                                <label>Job Position</label>
                                <Input 
                                placeholder="Ex. Software Developer" 
                                required
                                onChange={(event) => setJobPosition(event.target.value)}
                                />
                            </div>

                            <div className='mt-7 my-3'>
                                <label>Job Description</label>
                                <Textarea 
                                    placeholder="Ex. React, Laravel, Javascript" 
                                    required
                                    onChange={(event) => setJobDescription(event.target.value)}
                                />
                            </div>

                            <div className='my-3'>
                                <label>Years of experience</label>
                                <Input 
                                placeholder="Ex. 3" 
                                type="number" 
                                required
                                onChange={(event) => setJobExperience(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className='flex gap-5 justify-end'>
                            <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? 
                                <>
                                 <LoaderCircle className='animate-spin'/>Generating please wait
                                </>
                               : 'Start Interview'}
                            </Button>
                        </div>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddInterview