import React from "react";
import "./RecipePreview.scss";
import Food from "../../assets/Recipe/food.jpg";
import Time from "../../assets/Recipe/time.svg";
import { Link } from "react-router-dom";
const RecipePreview = () => {
  return (
    <Link to="/recipes/1">
      <div className="recipePreview">
        <img src={Food} alt="" className="recipePreview__image" />
        <div className="recipePreview__info">
          <div className="recipePreview__info-tags">
            <div className="recipePreview__info-tag">Драники</div>
            <div className="recipePreview__info-tag">Печь</div>
          </div>
          <h1 className="recipePreview__info-title">Морковные драники</h1>
          <div className="recipePreview__info-time">
            <img src={Time} alt="" />
            1ч 20мин
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipePreview;
