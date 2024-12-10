import Projects from "../models/projects.model";
import Users from "../models/users.model";
import { sequelize } from "../models";

sequelize.sync({ alter: true });
// const addMembers = async () => {
//   const membersList = await Users.findOne({ where: { id: 2 } });
//   const targetProject = await Projects.findOne({ where: { id: 2 } });
//   if (membersList && targetProject) {
//     await targetProject.$add("members", membersList);
//   }
//   const projectUsers = await targetProject?.$get("members");
//   console.log("projectUsers: ", projectUsers);
// };

// addMembers();

// const showMembers = async () => {
//   const targetProject = await Projects.findOne({ where: { id: 2 } });
//   const projectUsers = await targetProject?.$get("members");
//   console.log("projectUsers: ", projectUsers);
// };

// showMembers();

const showProjects = async () => {
  //await sequelize.sync({ alter: true });
  const targetUsers = await Users.findOne({ where: { id: 2 } });
  const projectList = await targetUsers?.$get("projects");
  console.log("projectUsers: ", projectList);
};

showProjects();
