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
            src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/84a59ca8df5a3875fc66d84f87943a62160c8ada/MockPrep.svg"
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>

            </span>
            <h2 className="mt-2 font-bold text-white">Desired Job Role</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Apply for the job role you desire.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>

            </span>
            <h2 className="mt-2 font-bold text-white">Job Description</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Align with the job description provided.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>

            </span>
            <h2 className="mt-2 font-bold text-white">Years of Experience</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Harder questions for more experience.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>

            </span>
            <h2 className="mt-2 font-bold text-white">Recorded Answers</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Record your answers for each question.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>

            </span>
            <h2 className="mt-2 font-bold text-white">Accessibility</h2>
            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Built-in voice-over for PWD engagement.</p>
          </a>
          <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
            <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
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
              Copyright &copy; 2024 Christian Medallada. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>


    </>

  )
}

export default LandingPage