// import ts module
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import AuthRoute from "./src/routes/AuthRoute.js";
import DataProviderRoute from "./src/routes/DataProviderRoute.js";
import whatsappConnect from "./src/services/whatsapp/whatsappConnect.js";
import connectDB from "./src/database/DataBase.js";
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth", AuthRoute);
app.use("/data-provider", DataProviderRoute);

//  connect mongo db
connectDB().then(async (res) => {
  // connect whatsappc Tool bots
  await whatsappConnect();
  //server
});
const port = 3000;
app.listen(port, () => {
  console.log(`server Start at Port  ${port}`);
});
