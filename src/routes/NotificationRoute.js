import express from "express";
import asynHandle from "express-async-handler";
import FetchNotiController from "../controllers/notification/FetchNotiController.js";
import DeleteNotiController from "../controllers/notification/DeleteNotiController.js";
const route = express.Router();

route.post("/fetch-noti", asynHandle(FetchNotiController));
route.post("/delete-noti", asynHandle(DeleteNotiController));
export default route;
