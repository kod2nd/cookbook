import React from "react";
import "../style/ListItem.css";
import selectedRecipeId from "../utils/selectedRecipeId"

const ListItem = props => {
  const { item, selectedRecipe } = props;
  const recipeId = item.recipe_id;
  console.log("selection", selectedRecipe)
  return (
    <div
      className={selectedRecipeId(selectedRecipe, recipeId)? "selected-list-item" : "list-item"}
      id={recipeId}
      onClick={() => props.handleClick(recipeId)}
    >
      <img className="image" src={item.image_url} alt="" />
      <div className="list-content">
        <div className="item-title">{item.title}</div>
        <p />
        <div className="item-source">Publisher: {item.publisher}</div>
      </div>
    </div>
  );
};

export default ListItem;
