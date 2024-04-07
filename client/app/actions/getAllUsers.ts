import { prisma } from "@/prisma/prisma-db";
import { getCurrentUser } from "./getCurrentUser";

export async function getAllUsers(){
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser){
            return [];
        }
        const users = await prisma.user.findMany({
            where:{
                id:{
                    not:currentUser.id,
                }
            }
        })
        return users;
    } catch (error) {
        console.log(error);
        return [];
    }
}