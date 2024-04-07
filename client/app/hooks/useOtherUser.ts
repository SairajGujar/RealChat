import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

const useOtherUser = (users:User[])=>{
    const session = useSession();
    const otherUser = useMemo(()=>{
        const otherUser = users.filter((user) => user.email !== session.data?.user.email);

        return otherUser[0];
    }, [session.data?.user?.email,users]);
    return otherUser;
    

}
export default useOtherUser