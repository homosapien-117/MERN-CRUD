import mongoose from "mongoose";
import colors from 'colors'

const connectDB=async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log(`mongoDB connected : ${conn.connection.host}` .cyan.bold.bgCyan)
    }
    catch(error){
        console.error(`${error.message}`.red.underline)
        process.exit(1)
    }   
}
export default connectDB