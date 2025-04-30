import Sequelize from "sequelize";
import sequelize from "../config/database.mjs";
import UserModel from "./user.mjs";
import AppointmentModel from "./appointment.mjs";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize, Sequelize.DataTypes);
db.Appointment = AppointmentModel(sequelize, Sequelize.DataTypes);

// Associations
db.User.hasMany(db.Appointment, {
  foreignKey: "patientId",
  as: "patientAppointments",
});
db.User.hasMany(db.Appointment, {
  foreignKey: "doctorId",
  as: "doctorAppointments",
});

db.Appointment.belongsTo(db.User, { as: "patient", foreignKey: "patientId" });
db.Appointment.belongsTo(db.User, { as: "doctor", foreignKey: "doctorId" });

export const { User, Appointment } = db;
export { sequelize };
