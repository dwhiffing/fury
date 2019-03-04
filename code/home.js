import PropTypes from "prop-types";
import React, { Fragment } from "react";

const Home = ({ _body }) => (
  <div style={{ maxWidth: 700, margin: '40px auto' }}>
    {_body}
    <p>More information on COMMAND Modern Air/Naval Operations can be found at:</p>
    <a href="http://www.warfaresims.com/"><img src="/assets/images/warfaresims.gif" alt="Warfare Sims" /></a>
    <a href="http://www.matrixgames.com/"><img src="/assets/images/matrix.png" alt="Matrix Games" /></a>
    <br/>
  </div>
);

Home.propTypes = {
  _body: PropTypes.node.isRequired
};

Home.defaultProps = {};

export default Home;
