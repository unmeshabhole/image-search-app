import React from "react";
import "./image.css";

const image = ({ imageDetails }) => {
  return (
    <li key={imageDetails.id}>
      <img src={imageDetails.urls.small} width="400" key={imageDetails.id} alt="alternate text" />
    </li>
  );
};

export default image;
