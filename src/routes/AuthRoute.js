import express from "express";
import AsyncHandel from "express-async-handler";
import MainOtpController from "../controllers/auth/MainOtpController.js";
import AuthProvideDataController from "../controllers/auth/AuthProvideDataController.js";
const route = express.Router();
route.post("/otp", AsyncHandel(MainOtpController));
route.post("/otp/provide-data", AsyncHandel(AuthProvideDataController));
export default route;
