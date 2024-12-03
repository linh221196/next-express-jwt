import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();

configViewEngine(app);

initWebRoutes(app);

app.listen(process.env.PORT || 8080, () => {
  console.log("Express JWT w/ TS running on: http://localhost:8080/ ");
});
