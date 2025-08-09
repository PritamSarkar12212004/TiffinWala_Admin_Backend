import express from "express";
import asyncHandler from "express-async-handler";
import OptionsController from "../controllers/options/OptionsController.js";
const router = express.Router();
router.post("/controll-options", asyncHandler(OptionsController));
export default router;
