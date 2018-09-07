const selectedRecipeId = (selectedRecipe, recipeID) => {
    if(selectedRecipe.recipe_id === recipeID){
      return true
    }
    return false
  }

  export default selectedRecipeId