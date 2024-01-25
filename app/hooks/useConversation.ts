import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import { getConversations } from "../actions/getConversations";

const useConversation = ()=>{
    const params = useParams();
    const conversationId = useMemo(()=>{
        if(!params.conversationId){
            return ''
        }
        return params.conversationId
    }, [params])

    const isOpen = useMemo(()=>!!conversationId, [conversationId])
    return useMemo(()=>{
        return{
            isOpen,
            conversationId
        }
    }, [isOpen, conversationId]);
}

export default useConversation;