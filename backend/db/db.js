import mongoose from "mongoose";

const connectDB = async () => {
    try{

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n MongoDB connected !! DB HOst :${connectionInstance.connection.host}`);
    }catch(error){
        console.log("Attempting to reconnect");
        console.log("Monogodb connection failed",error);
    }
}

export default connectDB;