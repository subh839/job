import express from "express";

import {
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/Admin.js";

const router = express.Router();

router.get("/", getAdmin);
router.post("/", createAdmin);
router.patch("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

export default router;
