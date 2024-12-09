import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  development: {
    username: process.env.USERNAME || "root",
    password: process.env.PASSWORD || "root",
    database: process.env.DBNAME || "jwt",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8080,
    dialect: "mysql",
  },
};
