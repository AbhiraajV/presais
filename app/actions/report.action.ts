'use server'
import prisma from "@/prisma"
export  const getUserReports = async (userId:string) => {
    return prisma.report.findMany({
        where:{
            userId,
        }
    })
}