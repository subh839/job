import mongoose from "mongoose";
import PEMdetails from "../models/workerDetails.js";


export const getPEM = async (req, res) => {
  try {
    const pemDetails = await PEMdetails.find();
    res.status(200).json(pemDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPEM = async (req, res) => {
  const PEM = req.body;
  const newPEM = new PEMdetails(PEM);
  try {
    await newPEM.save();

    res.status(201).json(newPEM);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePEM = async (req, res) => {
  const { id: id } = req.params;
  const PEM = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No org with that id");
  }

  const updatedPEM = await PEMdetails.findByIdAndUpdate(id, { ...PEM, id });
  res.json(updatePEM);
};

export const deletePEM = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No org with that id found !");
  }

  await PEMdetails.findByIdAndRemove(id);

  res.json({ message: "org deleted successfully!!" });
};
