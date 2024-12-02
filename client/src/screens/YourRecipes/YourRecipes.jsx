import React, { useState, useEffect } from "react";
import "./YourRecipes.scss";
import Aside from "../../components/Aside/Aside";
import add from "../../assets/Yours/add.svg";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
const YourRecipes = () => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Вы не авторизованы");
        return;
      }
      const response = await axios.get(
        `http://localhost:5000/api/recipes/my-recipes/${user.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);
  return (
    <div className="yourRecipes">
      <div className="yourRecipes__container">
        <Aside />
        <div className="yourRecipes__yours">
          <Link to="/addRecipe">
            <div className="yourRecipes__yours-add">
              <img src={add} alt="" className="yourRecipes__yours-add-img" />
            </div>
          </Link>
          {recipes.map((recipe) => (
            <RecipePreview
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourRecipes;
