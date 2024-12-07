import { Router, Express } from "express";
import {
  initHome,
  getUserPage,
  postCreateUser,
  deleteUserById,
  getEditUserById,
  postEditUserById,
} from "../controller/homeController";

const router = Router();

const initWebRoutes = (app: Express) => {
  router.get("/", initHome);
  router.get("/user", getUserPage);
  router.post("/user/create-user", postCreateUser);
  router.post("/delete-user/:id", deleteUserById);
  router.get("/edit-user/:id", getEditUserById);
  router.post("/edit-user/:id", postEditUserById);
  app.use("/", router);
};
export default initWebRoutes;
