import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

// get data by single id=====================>
export async function GET(req ,{params}) {

    const data= await params
    const result = await dbConnect("items").findOne({_id : new ObjectId(data.id)})
  return Response.json(result)
}

// delete data by single id==================>
export async function DELETE(req,{params}) {
    const data= await params
    const result= await dbConnect("items").deleteOne({_id : new ObjectId(data.id)})
    return Response.json(result)
}
// patch data by single id===================>
export async function PATCH(req, {params}) {
    const data = await params
    const postdata= await req.json()
    const filter= {_id : new ObjectId(data.id)}
    const update= await dbConnect("items").updateOne(filter,{ $set : {...postdata}})
    return Response.json(update)
}

