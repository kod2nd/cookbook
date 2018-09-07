import React from "react";
import "../style/Display.css";
import Modal from "./Modal"

const Display = props => {
  const { selectedRecipe } = props;
  if (selectedRecipe) {
    return (
      <div className="display">
        <div className="title">{selectedRecipe.title}</div>
        <img className="display-image" src={selectedRecipe.image_url} alt="" />
          <Modal id="openModal" selectedRecipe={selectedRecipe}/>
        <div className="recipe-source">
          Source: {selectedRecipe.publisher}, {selectedRecipe.publisher_url}
        </div>
        <div className="popularity">
          Popularity: {selectedRecipe.social_rank.toFixed(5)}
        </div>
      </div>
    );
  }
  return <div className="display" />;
};

export default Display;
