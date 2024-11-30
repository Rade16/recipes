import React from "react";
import "./RecipePage.scss";
import Aside from "../../components/Aside/Aside";

import img from "../../assets/Recipe/food.jpg";
const RecipePage = () => {
  return (
    <div className="recipePage">
      <div className="recipePage__container">
        <Aside />
        <div className="recipePage__recipe">
          <img src={img} alt="" className="recipePage__recipe-img" />
          <div className="recipePage__recipe-container">
            <h1 className="recipePage__recipe-title">Морковные драники</h1>
            <p className="recipePage__recipe-description">
              Морковные драники отлично подходят для завтрака или полдника.
              Подавайте их со сметаной или приготовьте простой крем, взбив
              сметану с сахаром. Наличие сыра в тесте придаст им нежный
              сливочный вкус и аромат. Дополните тесто сухофруктами, орехами и
              различными ароматными специями. Сначала пожарьте драники на
              сковороде, а потом доведите до готовности в духовке.
            </p>
            <div className="recipePage__recipe-ingredients">
              <h2 className="recipePage__recipe-ingredients-title">
                Ингредиенты
              </h2>
              <ul className="recipePage__recipe-ingredients-list">
                <li className="recipePage__recipe-ingredients-item">
                  <p className="recipePage__recipe-ingredients-item-food">
                    Морковь
                  </p>
                  <p className="recipePage__recipe-ingredients-item-quantity">
                    85г
                  </p>
                </li>
                <li className="recipePage__recipe-ingredients-item">Соль</li>
                <li className="recipePage__recipe-ingredients-item">Молоко</li>
              </ul>
            </div>
            <div className="recipePage__recipe-instructions">
              <h2 className="recipePage__recipe-instructions-title">
                ПОШАГОВЫЙ РЕЦЕПТ
              </h2>
              <ul className="recipePage__recipe-instructions-list">
                <li className="recipePage__recipe-instructions-item">
                  <div className="recipePage__recipe-instructions-item-step">
                    Шаг 1
                  </div>
                  <p className="recipePage__recipe-instructions-item-text">
                    Доведите морковные драники на сковороде, а потом доведите до
                    готовности в духовке.
                  </p>
                </li>
                <li className="recipePage__recipe-instructions-item">
                  <div className="recipePage__recipe-instructions-item-step">
                    Шаг 2
                  </div>
                  <p className="recipePage__recipe-instructions-item-text">
                    Доведите морковные драники на сковороде, а потом доведите до
                    готовности в духовке.
                  </p>
                </li>
                <li className="recipePage__recipe-instructions-item">
                  <div className="recipePage__recipe-instructions-item-step">
                    Шаг 3
                  </div>
                  <p className="recipePage__recipe-instructions-item-text">
                    Доведите морковные драники на сковороде, а потом доведите до
                    готовности в духовке.
                  </p>
                </li>
                <li className="recipePage__recipe-instructions-item">
                  <div className="recipePage__recipe-instructions-item-step">
                    Шаг 4
                  </div>
                  <p className="recipePage__recipe-instructions-item-text">
                    Доведите морковные драники на сковороде, а потом доведите до
                    готовности в духовке.
                  </p>
                </li>
                <li className="recipePage__recipe-instructions-item">
                  <div className="recipePage__recipe-instructions-item-step">
                    Шаг 5
                  </div>
                  <p className="recipePage__recipe-instructions-item-text">
                    Доведите морковные драники на сковороде, а потом доведите до
                    готовности в духовке.
                  </p>
                </li>
                <li className="recipePage__recipe-instructions-item">
                  <div className="recipePage__recipe-instructions-item-step">
                    Шаг 6
                  </div>
                  <p className="recipePage__recipe-instructions-item-text">
                    Доведите морковные драники на сковороде, а потом доведите до
                    готовности в духовке.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
