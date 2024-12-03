import { Request, Response, Router, Express } from "express";

const router = Router();

const initWebRoutes = (app: Express) => {
  router.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express TS with JWT");
  });
  app.use("/", router);
};
export default initWebRoutes;
