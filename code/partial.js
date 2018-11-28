import PropTypes from "prop-types";
import React, { Fragment } from "react";

const Partial = ({ _body }) => <Fragment>{_body}</Fragment>;

Partial.propTypes = {
  _body: PropTypes.node.isRequired
};

Partial.defaultProps = {};

export default Partial;
