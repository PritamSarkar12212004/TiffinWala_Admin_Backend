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
import ProductRoute from "./src/routes/ProductRoute.js";
import OptionsRoute from "./src/routes/OptionsRoute.js";
import NotificationRoute from "./src/routes/NotificationRoute.js";
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
app.use("/product", ProductRoute);
app.use("/option", OptionsRoute);
app.use("/notification", NotificationRoute);

//  connect mongo db
connectDB()
  .then(async (res) => {
    // connect whatsappc Tool bots
    await whatsappConnect()
      .then((res) => {
        const port = 3000;
        app.listen(port, () => {
          console.log(`server Start at Port  ${port}`);
        });
      })
      .catch((err) => {
        console.log(`Whatsapp Connection Failed Due to ` + err);
      });
  })
  .catch((err) => {
    console.log(`DataBase Connection Faild Due to ` + err);
  });
