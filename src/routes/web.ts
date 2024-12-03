import { Router, Express } from "express";
import { initHome, getUserPage } from "../controller/homeController";

const router = Router();

const initWebRoutes = (app: Express) => {
  router.get("/", initHome);
  router.get("/user", getUserPage);
  app.use("/", router);
};
export default initWebRoutes;
