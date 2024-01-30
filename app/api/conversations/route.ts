import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    
    try {
        const currentUser = await getCurrentUser()
        
    const body = await req.json();
    const alreadyExist = await prisma?.conversation.findMany({
        where:{
            userIds:{
                hasEvery:[body.userId, currentUser?.id]
            }
        }
    })
        const singleConversation = alreadyExist[0]
        if(singleConversation){
            return NextResponse.json(singleConversation, {status: 200})
        }    
    const conversation = await prisma?.conversation.create({
        data:{
            name:body.name,
            users:{
                connect:[
                    {id:currentUser?.id},
                    {id:body.userId}
                ]
            },
        }
    })
    return NextResponse.json(conversation, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, {status:500})
    }

}