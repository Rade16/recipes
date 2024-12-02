import React, { useState, useEffect } from "react";
import "./RecipesPage.scss";
import Navigation from "../../components/Header/Header";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import Aside from "../../components/Aside/Aside";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(
        "http://localhost:5000/api/recipes/all-recipes"
      );
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);
  return (
    <>
      <div className="recipesPage">
        <div className="recipesPage__container">
          <Aside />
          <div className="recipesPage__recipesList">
            {/* <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview /> */}
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
