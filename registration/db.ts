import mongoose from 'mongoose';

require('dotenv').config();

const DB_URL = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME + "?authSource=admin";

export default async function connection() {
    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



