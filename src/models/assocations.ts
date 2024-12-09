import  Users  from "./users.model";
import  Projects  from "./projects.model";
import { sequelize } from ".";
import ProjectMembers from "./project_members";

Users.belongsToMany(Projects, {
  through: ProjectMembers,
  as: "projects",
  foreignKey: "userId",
  otherKey: "projectId",
});
Projects.belongsToMany(Users, {
  through: ProjectMembers,
  as: "members",
  foreignKey: "projectId",
  otherKey: "userId",
});
sequelize.sync();
