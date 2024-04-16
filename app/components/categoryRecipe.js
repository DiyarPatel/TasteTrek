import React, { useState, useEffect } from "react";

const CategoryRecipes = ({ category }) => {
  // State to store recipes
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch recipes based on the selected category
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [category]);

  // Display loading message while fetching recipes
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display recipes
  return (
    <div>
      <h2>Recipes for {category}</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryRecipes;
