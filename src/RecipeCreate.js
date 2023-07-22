import React, { useState } from "react";

function RecipeCreate({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
         
            <td colSpan="3">
              <input
                type="text"
                name="photo"
                placeholder="Photo.url"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>
            
            <td>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>
        
            <td>
              <input
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
    
            <td colSpan="4">
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>
          

            <td colSpan="4">
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={formData.preparation}
                onChange={handleChange}
                required
              />
            </td>
       
        
            <td colSpan="5" style={{ textAlign: "center" }}>
              <button type="submit">Create</button>
            </td>
            
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
