const mongoose = require('mongoose');
import { ConnectionOptions } from 'tls';

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://kvrahulbabu:F60cYS5ait8MAhrj@backenddb.kv5oi.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB");

          console.log("Connected to database!");
    }
     catch (error: any) {
        console.log(error.message);
    }
}

export default connectDB;