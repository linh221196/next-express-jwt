import ProjectMembers from "../models/project_members";

console.log("======Create ProjectMembers Table======");

const create_table_project_members = async () => {
  await ProjectMembers.sync({ force: true })
    .then(() => {
      console.log("✅Success: ProjectMembers Table Created");
    })
    .catch((err) => {
      console.log("❗️Error Creating ProjectMembers Table: ", err);
    });
};

create_table_project_members();
