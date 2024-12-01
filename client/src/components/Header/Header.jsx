import React from "react";
import "./Header.scss";
import Search from "../../assets/Navigation/Search.svg";
import Login from "../../assets/Navigation/Login.svg";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null); // Удаляем данные пользователя
    localStorage.removeItem("token"); // Удаляем токен
    alert("Вы вышли из аккаунта");
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <h1 className="header__title">COOCKISH</h1>
        </Link>
        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="Поиск самых вкусных рецептов :)"
          />
          <button className="header__search-button">
            <img src={Search} alt="" />
          </button>
        </div>
        {user ? (
          <div>
            <span>Привет, {user.username}!</span>
            <button onClick={handleLogout}>Выйти</button>
          </div>
        ) : (
          <Link to="/login" className="header__profile">
            <div className="header__profile">
              <img src={Login} alt="" />
              <p className="header__profile-text">Войти</p>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
