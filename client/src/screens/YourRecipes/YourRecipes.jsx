import React from "react";
import "./YourRecipes.scss";
import Aside from "../../components/Aside/Aside";
import add from "../../assets/Yours/add.svg";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
const YourRecipes = () => {
  return (
    <div className="yourRecipes">
      <div className="yourRecipes__container">
        <Aside />
        <div className="yourRecipes__yours">
          <div className="yourRecipes__yours-add">
            <img src={add} alt="" className="yourRecipes__yours-add-img" />
          </div>
          <RecipePreview />
        </div>
      </div>
    </div>
  );
};

export default YourRecipes;
