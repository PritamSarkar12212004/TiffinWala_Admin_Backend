import express from "express";
import asyncHand from "express-async-handler";
import CreateProductController from "../controllers/product/CreateProductController.js";
import UpdateProductController from "../controllers/product/UpdateProductController.js";
const router = express.Router();
router.post("/create", asyncHand(CreateProductController));
router.post("/update", asyncHand(UpdateProductController));
export default router;
