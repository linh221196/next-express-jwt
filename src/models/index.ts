"use strict";

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("jwt", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
