import React from "react";
import "../style/list.css";
import ListItem from "./ListItem";

const List = props => {
  const { data, handleClick, selectedRecipe } = props;
  if (data.length > 0) {
    return (
      <div className="list">
        {data.map(item => {
          return (
            <ListItem
              item={item}
              key={item.recipe_id}
              handleClick={handleClick}
              selectedRecipe={selectedRecipe}
            />
          );
        })}
      </div>
    );
  } return <div className="list">
  <br />
      <div className="content-empty">
        <div>To begin, search for recipes using the search bar.</div>
        <p />
        If searching by ingredients, 
        seperate the ingredients with commas.
        E.g. Chicken, onion, carrot
      </div>
  
  </div>
};

export default List;
