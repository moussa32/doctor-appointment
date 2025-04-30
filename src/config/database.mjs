import { Sequelize } from "sequelize";

const sequelize = new Sequelize("appointment_db", "postgres", "your_password", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
