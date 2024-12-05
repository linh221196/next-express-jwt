import { Response, Request } from "express";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  database: process.env.DATABASE || "jwt",
  password: process.env.PASSWORD || "root",
});

export const initHome = (req: Request, res: Response) => {
  const name = "Linh";
  res.render(`home.ejs`, { name });
};

export const getUserPage = (req: Request, res: Response) => {
  res.render(`user.ejs`);
};

export const postCreateUser = (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  console.log(req.body);
  connection.query(
    `INSERT INTO users (email, password, username) VALUES (?, ?, ?)`,
    [email, password, username],
    (err, result, fields) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result, fields);
    }
  );

  res.send(`postCreateUser <br/>
    email: ${email} <br/>
    username: ${username}

    `);
};
