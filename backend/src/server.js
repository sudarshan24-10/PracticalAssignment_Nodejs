import express from 'express';
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from 'mongoose';
import CreateError from "./utils/error.js";
import userRouter from './routes/userRoute.js';
import imageUploadRouter from './routes/imageUploadRoute.js';
// import mongoSanitize from 'express-mongo-sanitize';
// import hpp from 'hpp';

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

app.use(helmet());  // adds security headers

app.use(morgan("dev"));  // logger

// MongoDB Sanitization middleware
// app.use(mongoSanitize());

// // Parameter Pollution middleware
// app.use(hpp());

app.use("/api/user",userRouter);  // user routes

app.use("/imageUpload",imageUploadRouter);  // image upload routes

app.use((err, req, res, next) => {        // custom error handler
    
    if (err instanceof CreateError) {
        res.status(err.statusCode).json({ error: err.message });
    } else {
        next(err);
    }
}); 

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on address http://localhost:${process.env.PORT}`);
})
