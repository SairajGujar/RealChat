export default async function getMessages(conversationId){
    try {
        const messages = await prisma?.message.findMany({
            where:{
                conversationId: conversationId
            },
            orderBy:{
                created_at:'asc'
            }, 
            include:{
                sender:true
            }
        })
        return messages
    } catch (error) {
        console.log(error)
        return []
    }
}