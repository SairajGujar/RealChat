import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

const useOtherUser = (users:User[])=>{
    const session = useSession();
    let otherUser1:User;
    const otherUser = useMemo(()=>{
        users.forEach(user=>{
            if(user.email!==session.data?.user.email){
                
                otherUser1=user;
            }
        });
        return otherUser1;
    }, [session]);
    return otherUser;
    

}
export default useOtherUser