"use strict";

import { Sequelize } from "sequelize-typescript";
import Users from "./users.model";
import Projects from "./projects.model";
import ProjectMembers from "./project_members";

const sequelize = new Sequelize("jwt", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
  models: [Users, Projects, ProjectMembers],
});

export { sequelize };
