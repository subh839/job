import mongoose from "mongoose";

const pemSchema = mongoose.Schema({
  name: String,
  phoneNo: Number,
  email: String,
  userName: String,
  passWord: String,
  latitude: Number,
  longitude: Number,
  distance: Number,
  city: String,
  address: String,
  occupation: String,
});

const PEMdetails = mongoose.model("PEMdetails", pemSchema);

export default PEMdetails;
