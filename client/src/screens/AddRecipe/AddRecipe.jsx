import React, { useState, useEffect } from "react";
import Aside from "../../components/Aside/Aside";
import "./AddRecipe.scss";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import img from "../../assets/img.svg"

const AddRecipe = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const token = localStorage.getItem("token");

    // if (!token) {
    //   alert("Вы не авторизованы");
    //   return;
    // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/recipes/create/${user.id}`,
        {
          title,
          description,
          ingredients,
          instructions,
          image: "",
          time: "1 час",
        },

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при создании рецепта:", error);
    }
  };

  return (
    <div className="addRecipe">
      <div className="addRecipe__container">
        <Aside />
        <div className="addRecipe__add">
          <form
            action=""
            className="addRecipe__add-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="file" className="addRecipe__add-form-pick">
              <img src={img} alt="" className="addRecipe__add-form-pick-img"/>
            <input id="file" type="file" className="addRecipe__add-form-pick-input"/>
            </label>
            <div className="addRecipe__add-form-container">
            <label htmlFor="recipe-title" className="addRecipe__add-form-label">
              Название рецепта
            </label>
            <input
              type="text"
              placeholder="Название рецепта"
              className="addRecipe__add-form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="recipe-title"
            />
            <label
              htmlFor="recipe-description"
              className="addRecipe__add-form-label"
            >
              Описание
            </label>
            <textarea
              type="text"
              placeholder="Очень вкусные морковные драники, еще и очень сытные"
              className="addRecipe__add-form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="recipe-description"
            />
            <label
              htmlFor="recipe-ingredients"
              className="addRecipe__add-form-label"
            >
              Ингредиенты
            </label>
            <input
              type="text"
              placeholder="Ингредиенты"
              className="addRecipe__add-form-input"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              id="recipe-ingredients"
            />
            <label
              htmlFor="recipe-instructions"
              className="addRecipe__add-form-label"
            >
              Как приготовить
            </label>
            <textarea
              type="text"
              placeholder="Инструкция"
              className="addRecipe__add-form-textarea"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              id="recipe-instructions"
            />

            <button className="addRecipe__add-form-button" onClick={handleSubmit}>
              Опубликовать
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
