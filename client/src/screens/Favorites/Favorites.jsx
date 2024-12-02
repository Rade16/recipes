import React, { useState, useEffect } from "react";
import "./Favorites.scss";
import Aside from "../../components/Aside/Aside";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import axios from "axios";

import { useAuth } from "../../context/AuthContext";

const Favorites = () => {
  const { user } = useAuth();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Вы не авторизованы");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/recipes/favorites/${user.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setFavoriteRecipes(response.data); // сохраняем список избранных рецептов в состояние
      } catch (error) {
        console.error("Ошибка при загрузке избранных рецептов:", error);
      }
    };

    fetchFavoriteRecipes();
  }, []);
  return (
    <div className="favorites">
      <div className="favorites__container">
        <Aside />
        <div className="favorites__recipesList">
          {favoriteRecipes.length > 0 ? (
            favoriteRecipes.map((recipe) => (
              <RecipePreview
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                time={recipe.time}
                image={recipe.image}
              />
            ))
          ) : (
            <p>Нет избранных рецептов</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
