import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import Users from "./users.model";
import Projects from "./projects.model";

class ProjectMembers extends Model {}

ProjectMembers.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Projects,
        key: "id",
      },
    },
  },
  {
    modelName: "ProjectMembers",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: "updateTimestamp",
  }
);

export default ProjectMembers;
