import SidebarProvider from "@/components/sidebar/SidebarProvider";
import UserList from "@/components/sidebar/UserList";
import { PropsWithChildren } from "react";
import { getAllUsers } from "../actions/getAllUsers";

export default async function UserLayout({ children }: PropsWithChildren) {
    const users = await getAllUsers();
    
    return (
        <SidebarProvider>
            <UserList users={users} name="People"/>
            {children}
        </SidebarProvider>
    )
}