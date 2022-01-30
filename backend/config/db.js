import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useCreateIndex: true, //this is no longer supported
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MONGODB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error}`)
        process.exit(1)
    }
}

export default connectDB