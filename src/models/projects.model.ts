import {
  Table,
  Column,
  DataType,
  BelongsToMany,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from "sequelize-typescript";

import { Project } from "../@types/Project";
import Users from "./users.model";
import ProjectMembers from "./project_members";

type ProjectCreate = Omit<Project, "id">;

@Table({
  modelName: "Projects",
  tableName: "Projects",
  freezeTableName: true,
  timestamps: true,
  updatedAt: "updateTimestamp",
})
class Projects extends Model<Project, ProjectCreate> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  declare readonly id: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    onUpdate: "CASCADE",
  })
  declare manager: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare describe: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  // timestamps
  @CreatedAt
  declare readonly createdAt: Date;
  @UpdatedAt
  declare readonly updatedAt: Date;

  @BelongsToMany(() => Users, () => ProjectMembers)
  declare members?: Users[];
}

export default Projects;
