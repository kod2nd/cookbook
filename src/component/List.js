import React from "react";
import "../style/List.css";
import ListItem from "./ListItem";

const List = props => {
  const { data, handleClick, selectedRecipe } = props;
//   console.log("insideList", data);

  return (
    <div className="list">
      {data.map(item => {
        return <ListItem item={item} key={item.recipe_id} handleClick={handleClick} selectedRecipe={selectedRecipe}/>;
      })}
    </div>
  );
};

export default List;
