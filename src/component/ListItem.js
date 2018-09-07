import React from "react";
import "../style/ListItem.css";

const ListItem = props => {
  const { item, selectedRecipe } = props;
  const recipeID = item.recipe_id;
  console.log("selection", selectedRecipe)
  return (
    <div
      className={selectedRecipe.recipe_id === recipeID? "selected-list-item" : "list-item"}
      id={recipeID}
      onClick={() => props.handleClick(recipeID)}
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
