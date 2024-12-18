import { Response, Request } from "express";

import {
  createUser,
  getAllUser,
  delUserById,
  getEditUser,
  postEditUser,
} from "../service/user.service";

export const initHome = (req: Request, res: Response) => {
  const name = "Linh";
  res.render(`home.ejs`, { name });
};

export const getUserPage = async (req: Request, res: Response) => {
  try {
    const usersList = await getAllUser();
    res.render(`user.ejs`, { usersList });
  } catch (error) {
    console.error("Error when fetching users's data:", error);
    res.status(500).send("Failed to create user");
  }
};

export const postCreateUser = async (req: Request, res: Response) => {
  const referer = req.get("referer") || "/";
  try {
    await createUser({ req });
    await getAllUser();
    res.redirect(referer);
  } catch (error) {
    console.error("Error when fetching users's data:", error);
    res.status(500).send("Failed to create user");
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const referer = req.get("referer") || "/";
  const { id } = req.params;
  try {
    await delUserById(parseInt(id));
    res.redirect(referer);
  } catch (error) {
    console.error("Error when deleting user:", error);
    res.status(500).send("Failed to delete user");
  }
};

export const getEditUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userInfo = await getEditUser(parseInt(id));
    res.render("editUser.ejs", { userInfo });
  } catch (error) {
    console.error("Error when deleting user:", error);
    res.status(500).send("Failed to delete user");
  }
};

export const postEditUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    await postEditUser(parseInt(id), username, email);
    const usersList = await getAllUser();
    res.render(`user.ejs`, { usersList });
  } catch (error) {
    console.error("Error when editing user:", error);
    res.status(500).send("Failed to edit user");
  }
};
