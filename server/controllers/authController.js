const { User } = require("../models/User");
const { Recipe } = require("../models/Recipe");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    console.log("Полученные данные:", req.body);

    try {
      // Проверка на ошибки валидации
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }

      const { username, password, email } = req.body;

      // Проверка на существование пользователя с таким именем
      const candidateByUsername = await User.findOne({ where: { username } });
      if (candidateByUsername) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }

      // Проверка на существование пользователя с таким email
      const candidateByEmail = await User.findOne({ where: { email } });
      if (candidateByEmail) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким email уже существует" });
      }

      // Хэшируем пароль
      const hashPassword = bcrypt.hashSync(password, 7);

      // Создаем нового пользователя
      const user = await User.create({
        username,
        password: hashPassword,
        email,
      });

      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Ошибка регистрации" });
    }
  }

  async login(req, res) {
    console.log("Полученные данные для входа:", req.body);
    try {
      const { email, password } = req.body;

      // Проверка наличия пользователя
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${email} не найден` });
      }

      // Проверка пароля
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` });
      }

      // Генерация токена
      const token = generateAccessToken(user.id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Ошибка при входе" });
    }
  }

  async auth(req, res) {
    try {
      console.log("Проверка authMiddleware:", req.user);
      // Получаем пользователя
      const user = await User.findOne({ where: { id: req.user.id } });
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      // Получаем рецепты, созданные пользователем
      // // const recipes = await Recipe.findAll({ where: { userId: user.id } });
      // console.log("Найденные рецепты:", recipes);
      // Получаем избранные рецепты
      // const favoriteRecipes = await Favorite.findAll({
      //   where: { userId: user.id },
      // });

      // Генерируем новый токен для пользователя
      const token = generateAccessToken(user.id);

      // Формируем ответ с данными пользователя, его рецептами и избранными рецептами
      return res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email, // Добавляем email
          // recipes, // Рецепты, созданные пользователем
          // favorites: favoriteRecipes, // Избранные рецепты
        },
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Server error" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Ошибка при получении пользователей" });
    }
  }
}

module.exports = new authController();
