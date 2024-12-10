import Projects from "../models/projects.model";

console.log("======Create User Table======");

const create_table_projects = async () => {

  await Projects.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Projects Table");
    })
    .catch((err) => {
      console.log("❗️Error in Create Projects Table : ", err);
    });
};

create_table_projects();
