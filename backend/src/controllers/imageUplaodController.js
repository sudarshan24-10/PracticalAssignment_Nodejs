import { uploadImageMetaData } from "../repository/mongodb.source.js";
import { uploadImageToFirebase } from "../usecase/uplaodToFireBase.js";


//image controller functions which will call respective repositories methods and usecases methods

export async function uploadImage(data,email,next){
    const url=await uploadImageToFirebase(data,next);
    await uploadImageMetaData(url,email,next);
    return url;
}