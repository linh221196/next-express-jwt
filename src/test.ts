import { sequelize } from "./models";
import Projects from "./models/projects.model";
import Users from "./models/users.model";

sequelize.sync();
const assign = async () => {
  const user = await Users.findOne({
    where: { id: 1 },
  });

  const project = await Projects.findOne({
    where: { id: 1 },
  });
  console.log(user instanceof Users);
  console.log(project instanceof Projects);
  if (user && project) user.addProject(project);
};

assign();
