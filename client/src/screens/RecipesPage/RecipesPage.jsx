import React, { useState, useEffect } from "react";
import "./RecipesPage.scss";
import Navigation from "../../components/Header/Header";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import Aside from "../../components/Aside/Aside";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/recipes/all-recipes"
        );

        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <>
      <div className="recipesPage">
        <div className="recipesPage__container">
          <Aside />
          <div className="recipesPage__recipesList">
        
            {recipes.map((recipe) => (
              <RecipePreview
                id={recipe.id}
                key={recipe.id}
                recipe={recipe}
                title={recipe.title}
                time={recipe.time}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipesPage;
