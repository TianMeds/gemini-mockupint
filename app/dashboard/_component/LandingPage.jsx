import React from 'react'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <>

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Transform Your Interview Preparation with AI
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Prepare for your next job interview with confidence using Gemini AI. Our cutting-edge AI technology simulates real interview scenarios, providing personalized feedback and detailed analysis to help you improve.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900" id="about">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
          <img
            alt="MockPrep AI"
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">About MockPrep AI</h2>

          <p className="mt-4 text-gray-400">
          MockPrep AI is an innovative tool powered by Gemini AI that aims to transform how people. Get ready for the interview process for a job. Making use of Gemini AI's capabilities, MockPrep AI produces personalized
          simulated interview questions based on job titles, descriptions, and  years of experience.

          </p>

          <p className="mt-4 text-gray-400">
          MockPrep AI supports professionals of all experience levels as well as those just beginning their careers. 
          By giving relevant and relevant interview questions, you may improve your interviewing skills scenarios. Our objective is to help you in developing confidence and improving your performance in real interviews for jobs.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Start Mock Interview
          </a>
        </div>
      </div>
    </div>
      </section>

      <section className='bg-gray-900' id='feature'>
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">Features Offered</h2>

          <p className="mt-4 text-gray-600">
            A variety of tools are available from MockPrep AI to support your career growth and career search. We also admire the knowledge, confidence, and accessibility that you can bring to your interview with our users.
          </p>

          <a
            href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Start Practicing
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>
            <h2 className="mt-2 font-bold text-white">Desired Job Role</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Apply for the job role you desire.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>
            <h2 className="mt-2 font-bold text-white">Job Description</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Align with the job description provided.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>
            <h2 className="mt-2 font-bold text-white">Years of Experience</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Harder questions for more experience.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>
            <h2 className="mt-2 font-bold text-white">Recorded Answers</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Record your answers for each question.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>
            <h2 className="mt-2 font-bold text-white">Accessibility</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Built-in voice-over for PWD engagement.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>
            <h2 className="mt-2 font-bold text-white">AI Feedback </h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Gives feedback and  rating on your answer.</p>
          </a>

        </div>
      </div>
    </div>
      </section>

      <footer className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-2 py-2 sm:px-4 lg:px-2">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
            <Image src={'/ThirdLogo.svg'} width={200} height={100} alt='logo'></Image>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>


    </>

  )
}

export default LandingPage