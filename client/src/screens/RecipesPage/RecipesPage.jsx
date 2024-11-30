import React from "react";
import "./RecipesPage.scss";
import Navigation from "../../components/Header/Header";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import Aside from "../../components/Aside/Aside";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const RecipesPage = () => {
  return (
    <>
      <div className="recipesPage">
        <div className="recipesPage__container">
          <Aside />
          <div className="recipesPage__recipesList">
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
            <RecipePreview />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipesPage;
