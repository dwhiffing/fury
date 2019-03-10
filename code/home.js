import PropTypes from "prop-types";
import React, { Fragment } from "react";

const Home = ({ _body }) => (
  <div>    
    <div className="hero" alt="Home">
      <img className="hero_logo" src="/assets/images/home_logo.png" alt="Northern Fury" />
    </div>

    <div className="home-wrapper">
      <div className="home-content">
        {_body}
      </div>

      <div style={{ flex: '1', justifyContent: 'center' }}>
        <img src="/assets/images/cover.jpg" alt="Cover" />
        <p className="sponsors">More information on COMMAND Modern Air/Naval Operations can be found at:</p>

        <div style={{ display: 'flex' }}>
          <a href="http://www.warfaresims.com/"><img src="/assets/images/warfaresims.gif" alt="Warfare Sims" /></a>
          <a href="http://www.matrixgames.com/"><img src="/assets/images/matrix.png" alt="Matrix Games" /></a>
        </div>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  _body: PropTypes.node.isRequired
};

Home.defaultProps = {};

export default Home;
