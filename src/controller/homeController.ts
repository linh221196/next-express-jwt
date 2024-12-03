import { Response, Request } from "express";

export const initHome = (req: Request, res: Response) => {
  const name = "Linh";
  res.render(`home.ejs`, { name });
};

export const getUserPage = (req: Request, res: Response) => {
  res.render(`user.ejs`);
};
