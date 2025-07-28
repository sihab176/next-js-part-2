import UserInfo from "@/components/UserInfo";
import Image from "next/image";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function  Home () {
  const session= await getServerSession(authOptions)
  return (
    <div>
      <h1 className="text-2xl text-center my-20">
         this is home page
      </h1>
      <h2 className="text-center">
        <span className="text-green-600">this client components user</span>
        <br/>
        <UserInfo></UserInfo>
      </h2>
      <h2 className="text-center">
        <span className="text-blue-600">this server components user</span>
       <br/>

        {JSON.stringify(session)}
      </h2>

    </div>
  );
}
