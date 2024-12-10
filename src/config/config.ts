"use strict";

import { Sequelize } from "sequelize-typescript";
import Users from "../models/users.model";
import Projects from "../models/projects.model";
import ProjectMembers from "../models/project_members";

const sequelize = new Sequelize("jwt", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
  models: [Users, Projects, ProjectMembers],
});

export { sequelize };
