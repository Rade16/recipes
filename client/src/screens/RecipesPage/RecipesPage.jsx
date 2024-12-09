import React, { useState, useEffect } from "react";
import "./RecipesPage.scss";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import Aside from "../../components/Aside/Aside";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const RecipesPage = () => {
  const { searchQuery } = useOutletContext();
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/recipes/all-recipes"
        );
        setRecipes(response.data);
        setFilteredRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRecipes(filtered);
    }
  }, [searchQuery, recipes]);

  return (
    <div className="recipesPage">
      <div className="recipesPage__container">
        <Aside />
        <div className="recipesPage__recipesList">
          {filteredRecipes.map((recipe) => (
            <RecipePreview
              id={recipe.id}
              key={recipe.id}
              recipe={recipe}
              title={recipe.title}
              time={recipe.time}
              image={recipe.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
