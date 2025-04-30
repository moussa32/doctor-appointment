export default (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Accepted", "Rejected"),
      defaultValue: "Pending",
    },
  });

  return Appointment;
};
