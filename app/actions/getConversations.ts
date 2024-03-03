import { prisma } from "@/prisma/prisma-db";
import { getCurrentUser } from "./getCurrentUser";

export async function getConversations(){
    const currentUser = await getCurrentUser();
    if(!currentUser?.id){
        return [];
    }
    try {
        const conversations = await prisma.conversation.findMany({
            where:{
                userIds:{
                    has:currentUser.id
                }
            },
            orderBy:{
                lastMessageAt:'desc'
            },
            include:{
                users:true,
                messages:true
            }
        })
    
        return conversations;
    } catch (error) {
        console.log(error);
        return []
    }
}