import React from "react";
import "../style/Display.css";

const Display = props => {
  const { data, selectedItem } = props;
  if (data) {
    return (
      <div className="display">
        <div className="title">{data.title}</div>
        <img className="display-image" src={data.image_url} alt="" />
        <div className="recipe-link">
          View Recipe:
          <a className="link-url" href={data.source_url} />
        </div>
        <div className="popularity">Popularity: {data.social_rank}</div>
      </div>
    );
  }
  return <div className="display" />;
};

export default Display;
