const { User } = require("../models/User");
const { Recipe } = require("../models/Recipe");

class RecipeController {
  async create(req, res) {
    try {
      const { title, description, ingredients, instructions, image } = req.body;
      const recipe = await Recipe.create({
        title,
        description,
        ingredients,
        instructions,
        image,
      });
      return res.json(recipe);
    } catch (e) {
      console.log(e);
    }
  }

  async addToFavorites(req, res) {
    try {
      const { userId, recipeId } = req.body;
      const user = await User.findOne({ where: { id: userId } });
      const recipe = await Recipe.findOne({ where: { id: recipeId } });
      await user.addRecipe(recipe);
      return res.json({ message: "Рецепт добавлен в избранное" });
    } catch (e) {
      console.log(e);
    }
  }

  async removeFromFavorites(req, res) {
    try {
      const { userId, recipeId } = req.body;
      const user = await User.findOne({ where: { id: userId } });
      const recipe = await Recipe.findOne({ where: { id: recipeId } });
      await user.removeRecipe(recipe);
      return res.json({ message: "Рецепт удален из избранного" });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new RecipeController();
