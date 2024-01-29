import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser?.id||!currentUser?.email){
            return NextResponse.json('Unauthorized', {status:404})
        }
        const data = await req.json();
        
        const newMessage = await prisma?.message.create({
            data: {
                body:data.message,
                conversation:{
                    connect:{
                        id:data.conversationId
                    }
                },
                sender:{
                    connect:{
                        id:currentUser.id
                    }
                }
            },
            include:{
                sender:true
            }
        })
        const updatedConversation = await prisma?.conversation.update({
            where:{
                id:data.conversationId
            },
            data:{
                lastMessageAt: new Date(),
                messages:{
                    connect:{
                        id:newMessage?.id
                    }
                }
            },
            include:{
                users:true
            }
        })
        return NextResponse.json(newMessage, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:400, error})
    }
}