import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import { sequelize } from "./models";

const app = express();

configViewEngine(app);

// Middleware for parsing JSON payloads
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

initWebRoutes(app);

app.listen(process.env.PORT || 8080, async () => {
  console.log("Express JWT w/ TS running on: http://localhost:8080/ ");
  await sequelize
    .authenticate()
    .then(async () => {
      console.log("connection success");
    })
    .catch((e) => {
      console.log("TT : ", e);
    });
});
