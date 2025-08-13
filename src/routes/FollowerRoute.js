import express from "express";
const router = express.Router();
import asynHandle from "express-async-handler";
import fetchFollowerController from "../controllers/follower/fetchFollowerController.js";
import deleteFollowerController from "../controllers/follower/deleteFollowerController.js";
router.post("/fetch-data", asynHandle(fetchFollowerController));
router.post("/delete-data", asynHandle(deleteFollowerController));
export default router;
