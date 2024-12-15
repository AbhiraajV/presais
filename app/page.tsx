'use client'
import { sendMessageToQueue } from "./actions/amq";
import { useEffect, useState } from "react";
import { setGetUser } from "./actions/clerk.functions";
import { User } from "@prisma/client";
import { RedirectToSignIn } from "@clerk/nextjs";
import HomePageForm from "@/components/home-components/HomePageForm";
export default function Home() {
  const [user,setUser] = useState<User | null | 'no user'>(null)
  useEffect(() => {
    setGetUser().then(u=>{
      if(u === null){
         setUser('no user')
         return;
      }
      setUser(u)
    })
  }, [])
  if(user === 'no user') return <RedirectToSignIn/>
  return (
    <>
      {user ? 
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Discover Your</span>
            <span className="block text-blue-600 dark:text-blue-400">SaaS Market Potential</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Get detailed competitor analysis, market insights, and growth opportunities for your SaaS idea in minutes.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <HomePageForm onSubmit={(v)=>sendMessageToQueue(JSON.stringify({prompt:JSON.stringify(v),userId:user.id}),user.id).then(()=>window.location.reload())} user={user} />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="h-12 w-12 text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Competitive Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Deep insights into your competitors strategies and market positioning.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="h-12 w-12 text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Market Trends</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Stay ahead with real-time market trends and growth opportunities.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="h-12 w-12 text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Get clear, actionable recommendations to improve your market position.</p>
          </div>
        </div>
      </div>
    </main>
        :<span className=" w-screen h-screen flex items-center justify-center text-xl animate-ping font-extrabold">
            🫦 hollup, 🫦 
        </span>
    }
    </>
    
  );
}
