import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import RecipesPage from "./screens/RecipesPage/RecipesPage.jsx";
import CalorieCalculator from "./screens/CalorieCalculator/CalorieCalculator.jsx";
import RecipePage from "./screens/RecipePage/RecipePage.jsx";
import Favorites from "./screens/Favorites/Favorites.jsx";
import YourRecipes from "./screens/YourRecipes/YourRecipes.jsx";
import Register from "./screens/Register/Register.jsx";
import Login from "./screens/Login/Login.jsx";

import { useAuth } from "./context/AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import AddRecipe from "./screens/AddRecipe/AddRecipe.jsx";

const user = localStorage.getItem("token");

const App = () => {
  const { setUser } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          "http://localhost:5000/api/auth/auth",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response.data.user);
        setUser(response.data.user); // Устанавливаем пользователя в контексте
      } catch (error) {
        console.error("Ошибка аутентификации:", error);
      }
    };

    fetchUserData();
  }, [setUser]);

  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        index: true,
        loader: () => redirect("/recipes"),
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
      {
        path: "/recipes/:id",
        element: <RecipePage />,
      },

      {
        path: "/calculator",
        element: <CalorieCalculator />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/yourRecipes",
        element: <YourRecipes />,
      },
      {
        path: "/addRecipe",
        element: <AddRecipe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  // </React.StrictMode>
);
