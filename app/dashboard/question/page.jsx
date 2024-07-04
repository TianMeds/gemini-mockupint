import React from 'react'

const Question = () => {
  return (
<section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Frequently Asked Questions
      </h1>

      <div className="divide-y divide-gray-700 rounded-xl border border-gray-700 bg-gray-800 mt-10">
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-200 dark:text-white">
            <h2 className="text-lg font-medium">What payment methods do you accept?</h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-400 dark:text-gray-300">
            We accept payments via credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.
            Contact our support team for more details on alternative payment methods.
          </p>
        </details>

        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-200 dark:text-white">
            <h2 className="text-lg font-medium">Do you offer refunds?</h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-400 dark:text-gray-300">
            Unfortunately, we dont provide refund for using the application.
          </p>
        </details>

        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-200 dark:text-white">
            <h2 className="text-lg font-medium">How can I upgrade my plan?</h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-400 dark:text-gray-300">
            You can easily upgrade your plan by logging into your account and selecting the upgrade option. Follow the
            on-screen instructions to complete the upgrade process.
          </p>
        </details>

        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-200 dark:text-white">
            <h2 className="text-lg font-medium">Where does the questions and feedback</h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-400 dark:text-gray-300">
            All question and data that are being generated was done by using Gemini AI
          </p>
        </details>
      </div>
    </div>
  </div>
</section>



  )
}

export default Question