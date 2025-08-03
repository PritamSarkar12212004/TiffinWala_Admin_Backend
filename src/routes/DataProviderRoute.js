import express from "express";
import asyncHandle from "express-async-handler";
import MainDataProvider from "../controllers/dataProvider/MainDataProvider.js";
const router = express.Router();
router.post("/main-data", asyncHandle(MainDataProvider));
export default router;
