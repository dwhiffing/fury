import React from "react";

const prefix = process.env.NODE_ENV === "production" ? "/fury" : "";

const Header = () => (
  <header className="about">
    <div className="container">
      <p>Alternative Cold War History 1994</p>
      <span>
        <a href={`${prefix}/contact`}>Contact</a>
        <span> | </span>
        <a href="http://northernfury.bhgdesigns.com/blog/">Blog</a>
      </span>
    </div>
  </header>
);

export default Header;
