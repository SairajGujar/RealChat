import SidebarProvider from "@/components/sidebar/SidebarProvider";
import { PropsWithChildren } from "react";

export default async function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}