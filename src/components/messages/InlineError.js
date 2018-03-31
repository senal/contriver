import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => <span style={{color: "#9d2d2b"}}>{text}</span>;

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;