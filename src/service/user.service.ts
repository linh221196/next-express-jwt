import { Request } from "express";
import { QueryResult } from "mysql2";
//import mysql from "mysql2";
import bcrypt from "bcryptjs";
import  Users  from "../models/users.model";

interface UserServiceProps {
  req: Request;
}

// const connection = mysql.createConnection({
//   host: process.env.HOST || "localhost",
//   user: process.env.USER || "root",
//   database: process.env.DATABASE || "jwt",
//   password: process.env.PASSWORD || "root",
// });

const salt = bcrypt.genSaltSync(10);

const hashPw = (password: string) => {
  return bcrypt.hashSync(password, salt);
};

// const revertHash = (password: string, hashPw: string) => {
//   return bcrypt.compareSync(password, hashPw);
// };

export const createUser = ({
  req,
}: UserServiceProps): Promise<Error | QueryResult | Users> => {
  const { email, password, username } = req.body;
  const hashPassword: string = hashPw(password);
  return new Promise((resolve, reject) => {
    Users.create({
      email: email,
      password: hashPassword,
      username: username,
      role: "USER",
    })
      .then((result) => {
        console.log("createUser", result);
        resolve(result);
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        reject(err);
      });
  });
};

// export const getAllUser = (): Promise<Error | QueryResult> => {
//   return new Promise((resolve, reject) => {
//     connection.query(`select * from users`, (err, result) => {
//       if (err) {
//         return reject(err);
//       }
//       console.log("getAllUser ", result);
//       return resolve(result);
//     });
//   });
// };

export const delUserById = (
  id: number
): Promise<Error | QueryResult | number> => {
  return new Promise((resolve, reject) => {
    try {
      const result = Users.destroy({
        where: {
          id: id,
        },
      });
      console.log("delUserById ", result);
      return resolve(result);
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  });
};

export const getEditUser = (
  id: number
): Promise<Error | QueryResult | Users | null> => {
  return new Promise((resolve, reject) => {
    try {
      const result = Users.findOne({
        where: {
          id: id,
        },
      });
      console.log("getEditUser ", result);
      return resolve(result);
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  });
};

export const postEditUser = (
  id: number,
  username: string,
  email: string
): Promise<Error | QueryResult | [affectedCount: number]> => {
  console.log("service ", id, username, email);
  return new Promise((resolve, reject) => {
    try {
      const result = Users.update(
        {
          username: username,
          email: email,
        },
        {
          where: {
            id: id,
          },
        }
      );
      console.log("editUserById ", result);
      return resolve(result);
    } catch (error) {
      console.error(error);
      return reject(error);
    }
  });
};
