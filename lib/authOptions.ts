import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter"
import { db } from './db';

const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages:{
    signIn:'/login'
  },
  callbacks:{
    async jwt({token, user}){
        const dbUser = (await db.get(`user:${token.id}`)) as User|null;
        if(!dbUser){
          token.id = user.id;
          return token;
        }
        return{
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          picture: dbUser.image
        }
    }
  }
};

export default authOptions;