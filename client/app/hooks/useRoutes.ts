import { LogOut, MessageCircleMore, Users } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"
import useConversation from "./useConversation"

const useRoutes = ()=>{
    const pathname = usePathname()
    const data = useConversation()
    const router  = useRouter()
    const routes = useMemo(()=>
        [
            {
                label:'Chat',
                href:'/conversations',
                active:pathname==='/conversations'||data.isOpen,
                icon:MessageCircleMore
            },
            {
                label:'Users',
                href:'/users',
                active:pathname==='/users',
                icon:Users
            },
            {
                label:'Logout',
                onClick:()=>{router.push('/api/auth/signout')},
                href:'/',
                icon:LogOut
            }
        ]
    , [pathname, data.conversationId])
    return routes;
}

export default useRoutes;