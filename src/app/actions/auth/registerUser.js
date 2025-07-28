"use server"
import dbConnect from "@/lib/dbConnect";

const registerUser =async (payload) => {
try {
     const result= await dbConnect("test_user").insertOne(payload)
 return result
} catch (error) {
    console.log(error);
    return null
}
};

export default registerUser;