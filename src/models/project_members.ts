import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import Users from "./users.model";
import Projects from "./projects.model";

@Table({
  modelName: "ProjectMembers",
  freezeTableName: true,
  timestamps: true,
  updatedAt: "updateTimestamp",
})
class ProjectMembers extends Model {
  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  @ForeignKey(() => Projects)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare projectId: number;
}

export default ProjectMembers;
