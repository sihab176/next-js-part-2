import dbConnect from "@/lib/dbConnect"

// get data 
export async function GET() {

  const data= await dbConnect("items").find().toArray()
 
  return Response.json(data)
}

// Post  
export async function POST(req) {
  const postdata= await req.json()
  const result= await dbConnect("items").insertOne(postdata)
  return Response.json(result)
}