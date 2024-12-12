'use client'
import { sendMessageToQueue } from "./actions/amq";
import HomePageForm from "@/components/HomePageForm";
import {
  SignIn,
} from '@clerk/nextjs'
import { useEffect, useState } from "react";
import { setGetUser } from "./actions/clerk.functions";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
export default function Home() {
  const [user,setUser] = useState<User | null>(null)
  useEffect(() => {
    setGetUser().then(u=>setUser(u))
  }, [])
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {!user ? 
        <SignIn/> :
        <HomePageForm user={user} onSubmit={(v)=>sendMessageToQueue(JSON.stringify({prompt:JSON.stringify(v),userId:user.id}),user.id).then(()=>router.refresh())}/>
      }
    </div>
  );
}
