import {
  Association,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  Model,
  Optional,

} from "sequelize";
import { sequelize } from "./index";
import { User } from "../@types/User";
import Projects from "./projects.model";


type UserCreate = Optional<User, "id">;

class Users extends Model<User, UserCreate> {
  declare readonly id: number; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
  declare email: string;
  declare password: string;
  declare username: string;
  declare role: "ADMIN" | "USER";

  declare getProjects: HasManyGetAssociationsMixin<Projects>; // Note the null assertions!
  declare addProject: HasManyAddAssociationMixin<Projects, number>;
  declare addProjects: HasManyAddAssociationsMixin<Projects, number>;
  declare setProjects: HasManySetAssociationsMixin<Projects, number>;
  declare removeProject: HasManyRemoveAssociationMixin<Projects, number>;
  declare removeProjects: HasManyRemoveAssociationsMixin<Projects, number>;
  declare hasProject: HasManyHasAssociationMixin<Projects, number>;
  declare hasProjects: HasManyHasAssociationsMixin<Projects, number>;
  declare countProjects: HasManyCountAssociationsMixin;
  // declare createProject: HasManyCreateAssociationMixin<Projects, 'ownerId'>;

  // timestamps!
  declare readonly createdAt: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
  declare readonly updatedAt: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.

  declare static associations: {
    projects: Association<Users, Projects>;
  };
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
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("ADMIN", "USER"), // Restrict to ADMIN or USER
      allowNull: false,
      defaultValue: "USER", // Set default to USER
    },
  },
  {
    sequelize,
    modelName: "Users",
    tableName: "Users",
    freezeTableName: true,
    timestamps: true,
    updatedAt: "updateTimestamp",
  }
);

Users.belongsToMany(Projects, {
  through: "ProjectMembers",
  as: "projects",
  foreignKey: "userId",
  otherKey: "projectId",
});

Projects.belongsToMany(Users, {
  through: "ProjectMembers",
  as: "members",
  foreignKey: "projectId",
  otherKey: "userId",
});

export default Users;
