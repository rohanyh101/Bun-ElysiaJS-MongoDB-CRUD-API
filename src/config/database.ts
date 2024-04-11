import mongoose from "mongoose";
const MONGO_URI: string = process.env.MONGO_URI || "";

const Connect2db = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error: ', err);
        process.exit(1);
    }
};

Connect2db();
export default mongoose;