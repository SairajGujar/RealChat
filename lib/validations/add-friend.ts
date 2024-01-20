import {z} from 'zod'

export const addfriend = z.object({
    email:z.string().email(),
})