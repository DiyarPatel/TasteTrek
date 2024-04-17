"use client";
const RecipeDetails = ({ selectedRecipe, setSelectedRecipe }) => {
  const handleClose = () => {
    setSelectedRecipe(null);
  };

  return (
    selectedRecipe && (
      <div className="modal">
        <div className="modal-content">
          <h2>{selectedRecipe.strMeal}</h2>
          <p>{selectedRecipe.strInstructions}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default RecipeDetails;
