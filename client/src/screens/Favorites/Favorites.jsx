import React from "react";
import "./Favorites.scss";
import Aside from "../../components/Aside/Aside";
import RecipePreview from "../../components/RecipePreview/RecipePreview";

const Favorites = () => {
  return (
    <div className="favorites">
      <div className="favorites__container">
        <Aside />
        <div className="favorites__recipesList">
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
