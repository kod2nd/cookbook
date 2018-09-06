import React from "react";
import "../style/ListItem.css";

const ListItem = props => {
  const { item } = props;
  const recipeID = item.recipe_id
  return (
    <div className="list-item" id={recipeID} onClick={() => props.handleClick(recipeID)}>
      <img className="image" src={item.image_url} alt="" />
      <div className="list-content">{item.title}</div>
    </div>
  );
};

export default ListItem;
