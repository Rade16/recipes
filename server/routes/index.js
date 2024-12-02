const Router = require("express");

const router = new Router();

const authRouter = require("./authRouter");
const recipeRouter = require("./recipeRouter");

router.use("/auth", authRouter);
router.use("/recipes", recipeRouter);

module.exports = router;
