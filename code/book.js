import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Book = ({ _body, book, image, alt, link }) => (
  <article className="partial" style={{ overflow: "hidden" }}>
    <img src={image} alt={alt} style={{ float: "left", width: "30%" }} />
    <div style={{ float: "left", width: "68%", margin: "0 0 0 2%" }}>
      {_body}
      <a href={link} style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        Read about {book}
      </a>
    </div>
  </article>
);

export default Book;
