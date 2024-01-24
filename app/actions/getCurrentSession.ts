import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function getCurrentSession(){
    const session = await getServerSession(authOptions);
    return session;
}