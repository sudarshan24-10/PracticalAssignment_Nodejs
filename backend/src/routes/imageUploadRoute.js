import express from 'express';
import { uploadImage } from '../controllers/imageUplaodController.js';



const imageUploadRouter = express.Router();

imageUploadRouter.post("/imageUpload",async(req,res,next)=>{
    try{
        const url=await uploadImage(req.body.formData,req.body.email,next); // formData is the image data 
        if(url){
            res.json(url);   // send url as a response back to client after successful upload
        } 
    }catch(err){
        throw err;
    }
});

export default imageUploadRouter;