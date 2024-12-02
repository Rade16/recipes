const sequelize = require("../db");
const { User } = require("./User");
const { Recipe } = require("./Recipe");
const { Favorite } = require("./Favorite");

User.hasMany(Recipe, { foreignKey: "user_id" });
Recipe.belongsTo(User, { foreignKey: "user_id" });

User.belongsToMany(Recipe, { through: Favorite, foreignKey: "user_id" });
Recipe.belongsToMany(User, { through: Favorite, foreignKey: "recipe_id" });

module.exports = {
  sequelize,
  User,
  Recipe,
  Favorite,
};
