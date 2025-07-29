import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/lib/dbConnect";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const authOptions={
   providers:[
    CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',

    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
 
    },
    async authorize(credentials, req) {
      // const user ={id: 1, name: "john ", email:"google@gmail.com"}
      console.log("credentials",credentials);
      const {username, password}=credentials
      console.log(username , " this is user name ");
      const user= await dbConnect("test_user").findOne({ username })
      console.log(user ," this is user ");
      const isPasswordOk=password ===user.password 


   
    if(isPasswordOk){
      return user 
    }else{
      return null
    }
      

    }
  }),
      GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
      GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
   ],

   callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
try {
     if(account){
    //  console.log({ user, account, profile, email, credentials });
       const {providerAccountId,provider}=account
    const {email :user_email, image,name}=user
    const payload={
      providerAccountId,
      provider,
      user_email,
      name,
      image,
      role: "user"
    }
    const isUserExists= await dbConnect("test_user").findOne({providerAccountId})

    if(!isUserExists){
      await dbConnect("test_user").insertOne(payload)
    }
   }
} catch (error) {
   return false
}
    return true
  },
  async session({ session, token, user }) {
    if(token){
      session.user.username = token.username
      session.user.role= token.role
    }
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    if(user){
      token.username= user.username
      token.role= user.role
    }
    return token
  }
}
}