'use server'
import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/prisma";
export const setGetUser = async () => {
    const clerkUser = await currentUser();
    if(!clerkUser) return null;
    const existingUser = await prisma.user.findFirst({where:{
        clerkId:clerkUser.id
    }})
    if(existingUser) return existingUser;
    const createUser = await prisma.user.create({
        data:{
            clerkId:clerkUser.id,
            email:clerkUser.emailAddresses[0].emailAddress,
            name:clerkUser.fullName,
        }
    })
    return createUser;
}