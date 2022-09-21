import mongoose from "mongoose";
import AdminDetails from "../models/Admin.js";

export const getAdmin = async (req, res) => {
  try {
    const adminDetails = await AdminDetails.find();
    res.status(200).json(adminDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createAdmin = async (req, res) => {
  const admin = req.body;

  const newAdmin = new AdminDetails(admin);
  try {
    await newAdmin.save();

    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  const { id: _id } = req.params;
  const admin = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No Admin with that id");
  }

  const updatedAdmin = await AdminDetails.findByIdAndUpdate(
    _id,
    { ...admin, id },
    { new: ture }
  );
  res.json(updatedAdmin);
};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Admin with that id");
  }

  await AdminDetails.findByIdAndRemove(id);

  res.json({ message: "Admin deleted successfully!!" });
};
