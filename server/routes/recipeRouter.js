const Router = require("express");
const router = new Router();
const controller = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create/:userId", authMiddleware, controller.create);
router.post("/add-to-favorites", controller.addToFavorites);
router.post(
  "/remove-from-favorites",
  authMiddleware,
  controller.removeFromFavorites
);
router.get("/all-recipes", controller.getAllRecipes);

router.get("/favorites/:userId", authMiddleware, controller.getFavoriteRecipes);

router.get("/my-recipes/:userId", authMiddleware, controller.getMyRecipes);

router.get ("/recipe/:id", controller.getRecipeById);

module.exports = router;
