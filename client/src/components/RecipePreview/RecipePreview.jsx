import React from "react";
import "./RecipePreview.scss";
import Food from "../../assets/Recipe/food.jpg";
import Time from "../../assets/Recipe/time.svg";
import { Link } from "react-router-dom";
import addToFavorites from "../../assets/Recipe/addtofavorite.svg";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
const RecipePreview = (obj) => {
  const { user } = useAuth();
  const handleAddToFavorites = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recipes/add-to-favorites",
        {
          userId: user.id,
          recipeId: obj.id,
        }
      );
    } catch (error) {
      console.error("Ошибка при добавлении в избранное:", error);
      alert("Не удалось добавить рецепт в избранное. Попробуйте снова.");
    }
  };
  return (
    <div className="recipePreview" id={obj.id}>
      <Link to={`/recipes/${obj.id}`} className="recipePreview__link">
        <img src={Food} alt="" className="recipePreview__image" />
      </Link>
      <div className="recipePreview__info">
        <div className="recipePreview__info-tags">
          <div className="recipePreview__info-tag">Драники</div>
          <div className="recipePreview__info-tag">Печь</div>
        </div>
        <div className="recipePreview__info-line">
          <h1 className="recipePreview__info-title">{obj.title}</h1>
          <img
            src={addToFavorites}
            alt=""
            onClick={handleAddToFavorites}
            className="recipePreview__info-favorite"
          />
        </div>
        <div className="recipePreview__info-time">
          <img src={Time} alt="" />
          <p>{obj.time}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
