import express from "express";

import {
  getShop,
  createShop,
  updateShop,
  deleteShop,
} from "../controllers/shop.js";

const router = express.Router();

router.get("/", getShop);
router.post("/", createShop);
router.patch("/:id", updateShop);
router.delete("/:id", deleteShop);

export default router;
