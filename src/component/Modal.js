import React from "react";
import "../style/Modal.css";
import convertToHttps from "../utils/convertToHttps";
import IFrame from "./IFrame"

const Modal = props => {
  const { selectedRecipe } = props;
  if (selectedRecipe) {
    const recipeUrl = convertToHttps(selectedRecipe.source_url);
    return (
      <div className="modal">
        <a className="view-recipe" href="#openModal">
          View Recipe
        </a>
        <div id="openModal" className="modal-popup">
          <div className="modal-content">
            <a href="#close" title="Close" className="close">
              X
            </a>
            <iframe
              title="recipe"
              className="iframe"
              src={recipeUrl}
              frameBorder="0"
            />
            {/* <IFrame /> */}
            <a
              className="go-recipe"
              href={recipeUrl}
              target="_blank"
            >
              Go to Recipe
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
