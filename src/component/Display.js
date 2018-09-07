import React from "react";
import "../style/Display.css";
import Modal from "./Modal";
import percentToRating from "../utils/percentToRating";

const Display = props => {
  const { selectedRecipe } = props;
  const RATING_STEPS = 5;

  if (selectedRecipe) {
    return (
      <div className="display">
        <div className="title">
          {selectedRecipe.title} |{" "}
          {percentToRating(selectedRecipe.social_rank, RATING_STEPS)}
        </div>

        <img className="display-image" src={selectedRecipe.image_url} alt="" />

        <Modal id="openModal" selectedRecipe={selectedRecipe} />

        <div className="recipe-source">
          Source: {selectedRecipe.publisher}, {selectedRecipe.publisher_url}
        </div>
      </div>
    );
  }
  return (
    <div className="display">
      <br />
      <div className="content-empty">
        <div>Search for recipes using the search bar.</div>
        <p />
        Seperate ingredients by commas.
        <div>Example: chicken, onion, carrot, pepper</div>
      </div>
    </div>
  );
};

export default Display;
