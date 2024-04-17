"use client";
import Image from "next/image";

const RecipeCard = ({ recipe, handleRecipeClick }) => {
  return (
    <div
      className="bg-white text-black rounded-lg shadow-md overflow-hidden relative"
      onClick={() => handleRecipeClick(recipe.idMeal)}
    >
      <div className="relative h-48">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          layout="fill"
          objectFit="cover"
          loader={({ src }) => src}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{recipe.strMeal}</h3>
        <p className="text-gray-600">{recipe.strArea}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
