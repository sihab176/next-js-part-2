import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/lib/dbConnect";
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
  })
   ],
   callbacks: {

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