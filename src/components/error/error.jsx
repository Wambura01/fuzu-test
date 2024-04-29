import React from "react";

import "./error.css";

function Error({ message }) {
  return (
    <div className="error-page-container">
      <div className="error-img_container">
        <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" alt="error" />
      </div>
      <h1 class="error-text">
        Whoops, We can't seem to find the resource you're looking for.
      </h1>
      <p class="error-msg">*** {message} ***</p>
    </div>
  );
}

export default Error;
