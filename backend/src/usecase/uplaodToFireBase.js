// import admin from 'firebase-admin';

// admin.initializeApp({
//   credential: admin.credential.cert(''), // Path to where my service account key is 
//   storageBucket: process.env.storageBucketURL // Firebase Storage bucket url
// });

// const bucket = admin.storage().bucket();

export async function uploadImageToFirebase(formData) {
//   try {
//     const uniqueFileName = `${Date.now()}.jpg`; 
//     const file = bucket.file(`images/${uniqueFileName}`); 
//     await file.save(formData.imageData);      // form data has the file buffer  or image data
//     console.log('Image uploaded successfully.');

//     const downloadUrl = await file.getSignedUrl({
//       action: 'read',
//       expires: `${Date.now()+ 30 * 60000}`     
//     });

//     return downloadUrl[0];  // download url
//   } catch (error) {
//     console.error('Error uploading image to Firebase Storage:', error);
//     throw error;
//   }
}
