import { sequelize } from "../models";
import Projects from "../models/projects.model";
import Users from "../models/users.model";

const assign = async () => {
  await sequelize.sync();
  const user = await Users.create({
    username: "test2",
    email: "test2@gmail.com",
    password: "123",
    role: "USER",
  });

  const project = await Projects.create({
    name: "test2",
    describe: "test2",
    manager: user.id,
  });
  console.log(user instanceof Users);
  console.log(project instanceof Projects);
  if (user && project) {
    await user.$add("projects", project);
    const userProjects = await user.$get("projects");
    console.log("Projects associated with the user:", userProjects);
    const projectUsers = await project.$get("members");
    console.log("Users associated with the project:", projectUsers);
  }
};

assign();
