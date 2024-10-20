import React from "react";
import "./Aside.scss";
import Recipe from "../../assets/Aside/recipe.svg";
import Calculator from "../../assets/Aside/calculator.svg";
import { NavLink, Link } from "react-router-dom";

const Aside = () => {
  return (
    <nav className="aside">
      <div className="aside__container">
        <ul className="aside__list">
          <Link to="/recipes" className="aside__item-link">
            <li className="aside__item">
              <div className="aside__item-block">
                <img src={Recipe} alt="" className="aside__item-img" />
              </div>
              <p className="aside__item-text">Рецепты</p>
            </li>
          </Link>
          <Link to="/calculator" className="aside__item-link">
            <li className="aside__item">
              <div className="aside__item-block">
                <img src={Calculator} alt="" className="aside__item-img" />
              </div>
              <p className="aside__item-text">Калькулятор калорий</p>
            </li>
          </Link>
          <Link to="/favorites" className="aside__item-link">
            <li className="aside__item">
              <div className="aside__item-block">
                <img src={Calculator} alt="" className="aside__item-img" />
              </div>
              <p className="aside__item-text">Избранное</p>
            </li>
          </Link>
          <Link to="/yourRecipes" className="aside__item-link">
            <li className="aside__item">
              <div className="aside__item-block">
                <img src={Calculator} alt="" className="aside__item-img" />
              </div>
              <p className="aside__item-text">Ваши рецепты</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Aside;
