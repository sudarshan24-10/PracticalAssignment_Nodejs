import express from 'express';
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from 'mongoose';


dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(()=>{     // DB connection using moongoose
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
    process.exit(1);
});

app.use(express.json()); // json parser

app.use(express.urlencoded({ extended: true }));

app.use(helmet());  // security headers

app.use(morgan("dev"));  // logger





app.listen(process.env.PORT,()=>{
    console.log(`Server is running on address http://localhost:${process.env.PORT}`);
})