import React from "react";
import "./Footer.scss";
import vk from "../../assets/Footer/vk.svg";
import tg from "../../assets/Footer/tg.svg";
import youtube from "../../assets/Footer/youtube.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__contactsList">
          <li className="footer__contactsList-item-title">Контакты:</li>
          <li className="footer__contactsList-item">coockish@mail.ru</li>
          <li className="footer__contactsList-item">+7 (999) 123-45-67</li>
        </ul>
        <ul className="footer__socialList">
          <li className="footer__socialList-item-title">Наши соц. сети:</li>
          <li className="footer__socialList-item">
            <div className="footer__socialList-item-social">
              <img src={vk} alt="" className="footer__socialList-item-img" />
              <img src={tg} alt="" className="footer__socialList-item-img" />
              <img
                src={youtube}
                alt=""
                className="footer__socialList-item-img"
              />
            </div>
          </li>
        </ul>
        <ul className="footer__navList">
          <li className="footer__navList-item-title">Навигация:</li>
          <li className="footer__navList-item">
            <Link to="/recipes">Рецепты</Link>
          </li>
          <li className="footer__navList-item">
            <Link to="/calculator">Калькулятор калорий</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
