import React from "react";
import "../style/ListItem.css";



const ListItem = props => {
  const { item } = props;
  const clickHandler = () =>{
    console.log(item.recipe_id)
    }
  return (
    <div className="list-item" id={item.recipe_id} onClick={clickHandler}>
      <img className="image" src={item.image_url} alt="" />
      <div className="list-content">{item.title}</div>
    </div>
  );
};

export default ListItem;
