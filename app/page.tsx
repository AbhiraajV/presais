'use client'
import { sendMessageToQueue } from "./amq";
import HomePageForm from "@/components/HomePageForm";
import {
  SignIn,
} from '@clerk/nextjs'
import { useEffect, useState } from "react";
import { setGetUser } from "./clerk.functions";
import { User } from "@prisma/client";
export default function Home() {
  const [user,setUser] = useState<User | null>(null)
  useEffect(() => {
    setGetUser().then(u=>setUser(u))
  }, [])
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {!user ? 
        <SignIn/> :
        <HomePageForm onSubmit={(v)=>sendMessageToQueue(JSON.stringify({prompt:JSON.stringify(v),userId:user.id}),user.id)}/>
      }
    </div>
  );
}
