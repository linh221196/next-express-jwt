import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./index";
import { User } from "../@types/User";

type UserCreate = Optional<User, "id">;

export class Users extends Model<User, UserCreate> {
  public readonly id!: number; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
  public email!: string;
  public password!: string;
  public username!: string;

  // timestamps!
  public readonly createdAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
  public readonly updatedAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    modelName: "Users",
    tableName: "Users",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: "updateTimestamp",
  }
);
