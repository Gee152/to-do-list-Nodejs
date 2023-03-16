const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  password: {
    type: DataTypes.CHAR,
    required: true,
  },
});

module.exports = User;
