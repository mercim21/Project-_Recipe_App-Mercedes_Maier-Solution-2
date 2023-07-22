import React from "react";

function RecipeList({ recipes, onDeleteRecipe }) {
  const handleDeleteRecipe = (recipeName) => {
    onDeleteRecipe(recipeName);
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.name}>
              <td>
                <img src={recipe.photo} alt={recipe.name} width="100" height="100" />
              </td>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td className="content_td">
                <p>{recipe.ingredients}</p>
              </td>
              <td className="content_td">
                <p>{recipe.preparation}</p>
              </td>
              <td>
                <button name="delete" onClick={() => handleDeleteRecipe(recipe.name)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;