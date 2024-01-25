import { LogOut, MessageCircleMore, Users } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"

const useRoutes = ()=>{
    const pathname = usePathname()
    const router  = useRouter()
    const routes = useMemo(()=>
        [
            {
                label:'Chat',
                href:'/conversations',
                active:pathname==='/conversations',
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
    , [pathname])
    return routes;
}

export default useRoutes;