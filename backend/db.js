import mongoose from "mongoose";

const connectDB = async() => {
   try{

    mongoose.connect(process.env.DBURI).then(() => {
        console.log("Mongo db connected 🚀")
    })

   }catch(err){
    console.log("Mongo db error" , err);
   } 
}

export default connectDB;