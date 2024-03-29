import { prisma } from "@/prisma/prisma-db";
import { getCurrentSession } from "./getCurrentSession";

export async function getCurrentUser(){
    const session = await getCurrentSession();
    if(!session){
        return null;
    }

    const currentUser = await prisma.user.findUnique({
        where:{
            email:session.user.email!
        }
    })
    return currentUser
}