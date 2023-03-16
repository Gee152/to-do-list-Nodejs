const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const User = require("./User");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
  nome: {
    type: DataTypes.STRING,
    required: true,
  },
  color: {
    type: DataTypes.STRING,
    required: true,
  },
});

Task.belongsTo(User, {
  contraint: true,
  foreignKey: "id_user",
});

module.exports = Task;
