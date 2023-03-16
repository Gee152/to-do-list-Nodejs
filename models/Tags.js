const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const User = require("./User");

const Tags = db.define("Tags", {
  nome: {
    type: DataTypes.STRING,
    required: true,
  },
  color: {
    type: DataTypes.STRING,
    required: true,
  },
});

Tags.hasMany(User, {
    contraint: true,
    foreignKey: "id_tags",
  });
module.exports = Tags;
