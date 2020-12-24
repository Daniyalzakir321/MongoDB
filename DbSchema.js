import mongoose from 'mongoose';

const MDBSchema = mongoose.Schema({
name: String,
imageUrl: String


});
 export default mongoose.model("his", MDBSchema);