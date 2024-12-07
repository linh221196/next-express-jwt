import { Sequelize } from "sequelize";

const sequelize = new Sequelize("jwt", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: true,
  },
});

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("successfully connected");
  } catch (error) {
    console.error("Error", error);
  }
};
