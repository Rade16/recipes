import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/auth/login`, {
        username,
        password,
      });
      console.log("Успешный вход:", response.data);
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
    } catch (error) {
      console.error("Ошибка входа:", error.response?.data || error.message);
      console.error(error);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Авторизация</h1>
        <form action="" className="login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="login__form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Пароль"
            className="login__form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__form-button" type="submit">
            Войти
          </button>
        </form>
        <p className="login__text">
          Еще нет аккаунта? <br />
          <Link to="/register" className="login__text-link">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
