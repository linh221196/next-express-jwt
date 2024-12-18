import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import { connection } from "../src/config/connectDB";

const app = express();

configViewEngine(app);

// Middleware for parsing JSON payloads
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

//test connection DB by sequelize
connection();

initWebRoutes(app);

app.listen(process.env.PORT || 8080, () => {
  console.log("Express JWT w/ TS running on: http://localhost:8080/ ");
});
