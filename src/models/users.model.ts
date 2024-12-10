import {
  Table,
  Column,
  DataType,
  BelongsToMany,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

import { User } from "../@types/User";
import Projects from "./projects.model";
import ProjectMembers from "./project_members";


type UserCreate = Omit<User, "id">;

@Table({
  modelName: "Users",
  tableName: "Users",
  freezeTableName: true,
  timestamps: true,
  updatedAt: "updateTimestamp",
})
class Users extends Model<User, UserCreate> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  declare readonly id: number; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @Column({
    type: DataType.ENUM("ADMIN", "USER"), // Restrict to ADMIN or USER
    allowNull: false,
    defaultValue: "USER", // Set default to USER
  })
  declare role: "ADMIN" | "USER";

  @CreatedAt
  declare readonly createdAt: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.

  @UpdatedAt
  declare readonly updatedAt: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.

  @BelongsToMany(() => Projects, () => ProjectMembers)
  declare projects?: Projects[];
}


export default Users;
