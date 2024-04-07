import { getCurrentSession } from "@/app/actions/getCurrentSession";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { prisma } from "@/prisma/prisma-db";
import { NextResponse } from "next/server";

export async function PUT(req:Request){
    try {
        const body = await req.json();
        const session = await getCurrentSession();
        if(!session){
            return NextResponse.json('Unauthorized', {status:401});
        }
        const updatedProfile = await prisma.user.update({
            where:{
                email:session.user.email!
            },
            data:{
                name:body.name
            }
        })
        return NextResponse.json(updatedProfile, {status:200});
    } catch (error) {
        return NextResponse.json(error, {status:500})
    }
}