import React, { useState, useEffect } from "react";
import "./RecipePage.scss";
import { useParams } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import axios from "axios";
import img from "../../assets/Recipe/food.jpg";
const RecipePage = (obj) => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {

      console.log(obj.id);
      console.log(obj);
      console.log(id);

      const response = await axios.get(
        `http://localhost:5000/api/recipes/recipe/${id}`
      );
      console.log(response.data);
      setRecipe(response.data);
    };    
    fetchRecipe();
  }, []); 


  return (
    <div className="recipePage">
      <div className="recipePage__container">
        <Aside />
        <div className="recipePage__recipe">
          <img src={img} alt="" className="recipePage__recipe-img" />
          <div className="recipePage__recipe-container">
            <h1 className="recipePage__recipe-title">{recipe.title}</h1>
            <p className="recipePage__recipe-description">
              {recipe.description}
            </p>
            <div className="recipePage__recipe-ingredients">
              <h2 className="recipePage__recipe-ingredients-title">
                Ингредиенты
              </h2>
              <p>
                {recipe.ingredients}
              </p>
              {/* <ul className="recipePage__recipe-ingredients-list">
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
              </ul> */}
            </div>
            <div className="recipePage__recipe-instructions">
              <h2 className="recipePage__recipe-instructions-title">
                ПОШАГОВЫЙ РЕЦЕПТ
              </h2>

                <p>{recipe.instructions}</p>

              {/* <ul className="recipePage__recipe-instructions-list">
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
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
