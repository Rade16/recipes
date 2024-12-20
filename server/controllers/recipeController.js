const { User, Recipe, Favorite } = require("./../models/index");

class RecipeController {
  async searchRecipes(req, res) {
    try {
      const { query } = req.query;
      const recipes = await Recipe.findAll({
        where: {
          title: {
            [Op.iLike]: `%${query}%`,
          },
        },
      });
      return res.json(recipes);
    } catch (error) {
      console.error("Ошибка при поиске рецептов:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  async create(req, res) {
    try {
      const { title, description, ingredients, instructions, time } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : null;
      const recipe = await Recipe.create({
        user_id: req.user.id,
        title,
        description,
        ingredients,
        instructions,
        image,
        time,
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

      if (!user || !recipe) {
        return res
          .status(404)
          .json({ message: "Пользователь или рецепт не найден" });
      }

      const existingFavorite = await Favorite.findOne({
        where: { user_id: userId, recipe_id: recipeId },
      });

      if (existingFavorite) {
        await existingFavorite.destroy();
        return res.json({ message: "Рецепт удалён из избранного" });
      } else {
        await Favorite.create({ user_id: userId, recipe_id: recipeId });
        return res.json({ message: "Рецепт добавлен в избранное!!аываыввыыв" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Ошибка сервера" });
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

  async getAllRecipes(req, res) {
    try {
      const recipes = await Recipe.findAll();
      return res.json(recipes);
    } catch (e) {
      console.log(e);
    }
  }

  async getMyRecipes(req, res) {
    try {
      const recipes = await Recipe.findAll({ where: { user_id: req.user.id } });
      return res.json(recipes);
    } catch (e) {
      console.log(e);
    }
  }

  async getFavoriteRecipes(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findOne({
        where: { id: userId },
        include: {
          model: Recipe,
          through: { attributes: [] },
        },
      });

      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      return res.json(user.recipes);
    } catch (error) {
      console.error("Ошибка при получении избранных рецептов:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  async getRecipeById(req, res) {
    try {
      const recipe = await Recipe.findOne({ where: { id: req.params.id } });
      return res.json(recipe);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new RecipeController();
