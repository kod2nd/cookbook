const selectedRecipeId = (selectedRecipe, recipeId) => {
  if (selectedRecipe && recipeId) {
    if (selectedRecipe.recipe_id === recipeId) {
      return true;
    }
  }
  return false;
};

export default selectedRecipeId;
