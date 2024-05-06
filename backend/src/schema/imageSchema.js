import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    userRefId: {                            // using user obj id as reference
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    imageUrl: String 
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
