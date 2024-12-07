import { Request } from "express";
import { QueryResult } from "mysql2";
import mysql from "mysql2";
import bcrypt from "bcryptjs";

interface UserServiceProps {
  req: Request;
}

const connection = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  database: process.env.DATABASE || "jwt",
  password: process.env.PASSWORD || "root",
});

const salt = bcrypt.genSaltSync(10);

const hashPw = (password: string) => {
  return bcrypt.hashSync(password, salt);
};

// const revertHash = (password: string, hashPw: string) => {
//   return bcrypt.compareSync(password, hashPw);
// };

export const createUser = ({
  req,
}: UserServiceProps): Promise<Error | QueryResult> => {
  const { email, password, username } = req.body;
  const hashPassword: string = hashPw(password);
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO users (email, password, username,createdAt,updatedAt) VALUES (?, ?, ?,?,?)`,
      [email, hashPassword, username, new Date(), new Date()],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        console.log("createUser ", result);
        return resolve(result);
      }
    );
  });
};

export const getAllUser = (): Promise<Error | QueryResult> => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from users`, (err, result) => {
      if (err) {
        return reject(err);
      }
      console.log("getAllUser ", result);
      return resolve(result);
    });
  });
};

export const delUserById = (id: number): Promise<Error | QueryResult> => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM users WHERE id = ?`, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      console.log("delUserById ", result);
      return resolve(result);
    });
  });
};

export const getEditUser = (id: number): Promise<Error | QueryResult> => {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * FROM users WHERE id = ?`,
      [id],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        console.log("editUserById ", result);
        return resolve(result);
      }
    );
  });
};

export const postEditUser = (
  id: number,
  username: string,
  email: string
): Promise<Error | QueryResult> => {
  console.log("service ", id, username, email);
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE users
        SET email = ?, username = ?
        WHERE id = ?`,
      [email, username, id],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        console.log("editUserById ", result);
        return resolve(result);
      }
    );
  });
};
