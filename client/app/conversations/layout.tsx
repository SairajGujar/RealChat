import SidebarProvider from "@/components/sidebar/SidebarProvider";
import ChatList from "@/components/sidebar/ChatList";
import { PropsWithChildren } from "react";
import { getConversations } from "../actions/getConversations";

export default async function ConversationLayout({ children }: PropsWithChildren) {
    const conversations = await getConversations();

    return (
        <SidebarProvider>
            <ChatList conversations={conversations}/>
            {children}
        </SidebarProvider>
    )
}