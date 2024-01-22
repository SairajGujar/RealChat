import authOptions from "@/lib/authOptions";
import { prisma } from "@/prisma/prisma-db";
import { getServerSession } from "next-auth";

export const getUsers = async()=>{
    const session = await getServerSession(authOptions);
    if(!session){
        return [];
    }

    try {
        const users = await prisma.user.findMany({
            where:{
                NOT:{
                    email:session.user.email
                }
            }
        })
        return users;
    } catch (error:any) {
        return [];
    }
}