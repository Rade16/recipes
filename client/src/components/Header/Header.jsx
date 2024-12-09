import React, { useState } from "react";
import "./Header.scss";
import Search from "../../assets/Navigation/Search.svg";
import Login from "../../assets/Navigation/Login.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logout from "../../assets/Navigation/logout.svg";

const Header = ({ onSearch }) => {
  const { user, setUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    alert("Вы вышли из аккаунта");
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
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
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="header__search-button">
            <img src={Search} alt="" />
          </button>
        </div>
        {user ? (
          <div className="header__profile">
            <span>Привет, {user.username}!</span>
            <button onClick={handleLogout} className="header__profile-button">
              <img src={logout} alt="" className="header__profile-button-img" />
            </button>
          </div>
        ) : (
          <Link to="/login" className="header__button">
            <div className="header__button">
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
