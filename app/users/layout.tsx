import SidebarProvider from "@/components/sidebar/SidebarProvider";
import UserList from "@/components/sidebar/UserList";
import { PropsWithChildren } from "react";

export default async function UserLayout({ children }: PropsWithChildren) {
    return (
        <SidebarProvider>
            <UserList/>
            {children}
        </SidebarProvider>
    )
}