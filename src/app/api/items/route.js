import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

// get data 
export async function GET() {

  const data= await dbConnect("items").find().toArray()
 
  return Response.json(data)
}

// Post  
export async function POST(req) {
  const postdata= await req.json()
  const result= await dbConnect("items").insertOne(postdata)
  revalidatePath("/product")
  return Response.json(result)
}

