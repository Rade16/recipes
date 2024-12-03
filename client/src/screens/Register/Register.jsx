import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/registration`,
        {
          username,
          password,
          email,
        }
      );
      navigate("/login")
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1 className="register__title">Регистрация</h1>
        <form action="" className="register__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Имя"
            className="register__form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="register__form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Пароль"
            className="register__form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register__form-button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="register__text">
          Уже есть аккаунт? <br />
          <Link to="/login" className="register__text-link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
