import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  redirect,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import RecipesPage from "./screens/RecipesPage/RecipesPage.jsx";
import CalorieCalculator from "./screens/CalorieCalculator/CalorieCalculator.jsx";
import RecipePage from "./screens/RecipePage/RecipePage.jsx";
import Favorites from "./screens/Favorites/Favorites.jsx";
import YourRecipes from "./screens/YourRecipes/YourRecipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
