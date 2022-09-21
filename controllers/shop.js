import mongoose from "mongoose";
import ShopDetails from "../models/ShopDetails.js";

export const getShop = async (req, res) => {
  try {
    const shopDetails = await ShopDetails.find();
    res.status(200).json(shopDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createShop = async (req, res) => {
  const shop = req.body;

  const newShop = new ShopDetails(shop);
  try {
    await newShop.save();

    res.status(201).json(newShop);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateShop = async (req, res) => {
  const { id: id } = req.params;
  const shop = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Customer with that id");
  }

  const updatedCustomer = await ShopDetails.findByIdAndUpdate(
    id,
    { ...shop, id }
  );
  res.json(updatedCustomer);
};

export const deleteShop = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No shop with that id");
  }

  await ShopDetails.findByIdAndRemove(id);

  res.json({ message: "Shop deleted successfully" });
};
