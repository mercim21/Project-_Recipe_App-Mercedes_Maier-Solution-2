import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const handleDeleteRecipe = (recipeName) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.name !== recipeName)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate onAddRecipe={handleAddRecipe} />
    </div>
  );
}

export default App;
