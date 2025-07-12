// import ts module
// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import AuthRoute from "./src/routes/AuthRoute.js";
import whatsappConnect from "./src/services/whatsappConnect.js";
const app = express();

// middleware
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use("/auth", AuthRoute);

// connect whatsappc Tool bots
whatsappConnect();
//server
const port = 3000;
app.listen(port, () => {
  console.log(`server Start at Port  ${port}`);
});
