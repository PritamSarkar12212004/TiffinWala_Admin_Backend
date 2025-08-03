import express from "express";
import asyncHand from "express-async-handler";
import CreateProductController from "../controllers/auth/CreateProductController.js";
const router = express.Router();
router.post("/create", asyncHand(CreateProductController));
export default router;
