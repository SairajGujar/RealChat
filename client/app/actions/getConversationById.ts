import { prisma } from "@/prisma/prisma-db";
import { getCurrentUser } from "./getCurrentUser";

export async function getConversationById(id:string){
    const currentUser = await getCurrentUser();
    if(!currentUser?.id){
        return null
    }
    try {
        const conversation = await prisma.conversation.findUnique({
            where:{
                id:id,
            },
            include:{
                users:true,
                messages:true
            }
        })
        return conversation
    } catch (error) {
        console.log(error);
        return null
    }
}