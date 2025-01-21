"use client"
import PricingPlan from '@/app/_data/PricingPlan'
import { useUser } from '@clerk/nextjs'
import React from 'react'

function Upgrade() {

    const {user}=useUser();

  return (
    <div className='p-10 border-red-800 '>
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 w-full">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 w-fit items-center justify-center">
  
    {PricingPlan.map((item,index)=>(
        <div key={index} className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12 bg-blue-500">
      <div className="text-center">
        <h2 className="text-lg font-bold text-white">
          {item.duration}
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-extrabold text-yellow-300 sm:text-4xl"> Rs .{item.price} </strong>

          <span className="text-sm font-bold text-white">/{item.duration}</span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span className="text-slate-950 font-bold"> Unlimted AI forms </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span className="text-slate-950 font-bold"> Unlimted User Form Responses </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span className="text-slate-950 font-bold"> Email support </span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-indigo-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span className="text-slate-950 font-bold"> Unlimited Service Support</span>
        </li>
      </ul>

      <a
        href={item.link+'?prefilled_email='+user?.primaryEmailAddress.emailAddress}
        target='_blank'
        className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-110 text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Get Started
      </a>
    </div>
    ))}
    
  </div>
</div>
    </div>
  )
}

export default Upgrade