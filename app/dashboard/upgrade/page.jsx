import React from 'react'
import pricingOptions from '@/utils/planData'

const Upgrade = () => {
  return (
<div className='p-10 bg-gray-900 text-white'>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">

          {pricingOptions.map((item, index) => (
            <div key={index} className="rounded-2xl border border-gray-700 p-6 shadow-sm sm:px-8 lg:p-12 bg-gray-800">
              <div className="text-center">
                <h2 className="text-lg font-medium text-white">
                  {item.name}
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl"> ₱ {item.cost} </strong>
                  <span className="text-sm font-medium text-gray-400">/month</span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                {item.offering.map((offer, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-gray-400">{offer.value}</span>
                  </li>
                ))}
              </ul>

              <a
                href={item.paymentLink ? item.paymentLink : `mailto:${item.email}`}
                className="mt-8 block rounded-full border border-indigo-500 bg-blue-700 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900 focus:text-white"
              >
                {item.paymentLink ? "Get Started" : "Contact Us"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Upgrade
