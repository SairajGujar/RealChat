export {default} from 'next-auth/middleware'

export const config = {
    matcher:[
        '/users',
        '/conversations/:id*'
    ]
}