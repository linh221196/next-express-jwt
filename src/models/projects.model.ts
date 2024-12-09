import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./index";
import { Project } from "../@types/Project";
// import  Users  from "./users.model";
// import ProjectMembers from "./project_members";

type ProjectCreate = Optional<Project, "id">;

class Projects extends Model<Project, ProjectCreate> {
  public readonly id!: number;
  public manager!: number;
  public describe!: string;
  public name!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

 
}

Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manager: {
      type: DataTypes.INTEGER, //Users table's ID
      allowNull: true,
      references: {
        model: "Users", // The name of the Users table
        key: "id", // The column in the Users table being referenced
      },
      onUpdate: "CASCADE", // Optional: Sync changes from Users table
      onDelete: "CASCADE", // Optional: Delete related Projects when a User is deleted
    },
    describe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Projects",
    tableName: "Projects",
    freezeTableName: true,
    timestamps: true,
    updatedAt: "updateTimestamp",
  }
);

// Projects.belongsToMany(Users, {
//   through: ProjectMembers,
//   as: "members",
//   foreignKey: "projectId",
//   otherKey: "userId",
// });

export default Projects;