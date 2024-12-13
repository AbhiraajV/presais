'use client'
import { sendMessageToQueue } from "./actions/amq";
import HomePageForm from "@/components/HomePageForm";
import { useEffect, useState } from "react";
import { setGetUser } from "./actions/clerk.functions";
import { User } from "@prisma/client";
import { RedirectToSignIn } from "@clerk/nextjs";
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
    <div className="w-screen h-screen flex items-center justify-center">
      {user ? <HomePageForm user={user} onSubmit={(v)=>sendMessageToQueue(JSON.stringify({prompt:JSON.stringify(v),userId:user.id}),user.id).then(()=>window.location.reload())}/>
        :<span className="text-xl animate-ping font-extrabold">
            🫦 hollup, 🫦 
        </span>
    }
    </div>
  );
}
