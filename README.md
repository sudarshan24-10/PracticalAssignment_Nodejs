# PracticalAssignment_Nodejs

This application provides APIs for managing user data and uploading images.

### Features
- Create, read, update, and delete user data
- Upload images and store metadata in the database

### Technologies Used
- Node.js
- Express.js
- MongoDB
- Firebase Storage
- Other dependencies (check package.json for details)

## Setup

- git clone <repository-url>

- npm install

#### set up .env file

- MONGODB_URI=<your-mongodb-uri>
- PORT=<server-port>

### start the server

- npm run start
- npm start

### API Endpoints

- POST /api/user/createUser: Create a new user.
- PATCH /api/user/updateUser: Update user details.
- DELETE /api/user/deleteUser: Delete a user.
- GET /api/user/readUserData: Get all user data.
- GET /api/user/getUser: Get user data by email.
- POST /imageUpload/imageUpload: Upload an image.



**Method: POST**
**POST /api/user/createUser:** Create a new user.
**Request Body:** JSON object containing user information such as `first_name`, `last_name`, `email`, `phone_no`, `gender`, and `address`.
**Response:** JSON object containing the newly created user's details.

---

**Method: PATCH**
**PATCH /api/user/updateUser:** Update user details.
**Request Body:** JSON object containing the email of the user to update and the new data to update.
**Response:** JSON object containing the updated user's details.

---

**Method: DELETE**
**DELETE /api/user/deleteUser:** Delete a user.
**Request Body:** JSON object containing the email of the user to delete.
**Response:** JSON object confirming the deletion of the user.

---

**Method: GET**
**GET /api/user/readUserData:** Get all user data.
**Request Body:** None
**Response:** JSON array containing all user data.

---

**GET /api/user/getUser:** Get user data by email.
**Request Body:** JSON object containing the email of the user to retrieve.
**Response:** JSON object containing the user's details.

---

**Method: POST**
**POST /imageUpload/imageUpload:** Upload an image.
**Request Body:** FormData containing the image file to upload and the email of the user to associate the image with.
**Response:** JSON object containing the URL of the uploaded image.

---

##### I have used email as a unique identifier do curd operations as there is no front end or we are not storing user sessions or any token to authenticate user
