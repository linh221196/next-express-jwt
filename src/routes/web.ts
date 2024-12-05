import { Router, Express } from "express";
import {
  initHome,
  getUserPage,
  postCreateUser,
} from "../controller/homeController";

const router = Router();

const initWebRoutes = (app: Express) => {
  router.get("/", initHome);
  router.get("/user", getUserPage);
  router.post("/user/create-user", postCreateUser);
  app.use("/", router);
};
export default initWebRoutes;
