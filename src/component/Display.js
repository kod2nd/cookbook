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
        <div className="recipe-link">
          View Recipe:
          <a
            className="link-url"
            target="_blank"
            href={selectedRecipe.source_url}
          >
            {selectedRecipe.source_url}
          </a>
        </div>
        <Modal id="openModal" selectedRecipe={selectedRecipe}/>
        <div className="popularity">
          Popularity: {selectedRecipe.social_rank.toFixed(5)}
        </div>
      </div>
    );
  }
  return <div className="display" />;
};

export default Display;
