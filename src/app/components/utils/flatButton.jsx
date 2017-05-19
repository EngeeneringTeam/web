import React from 'react';
import PropTypes from 'prop-types';

const FlatButton = (props) => (
  <button
    className={`flat-button ${props.picker ? 'picker' : ''} ${props.centered ? 'centered' : '' } ${props.full ? 'full' : ''}`}
    onClick={() => props.onClick()}
    type="button"
  >
    {props.children}
  </button>
);

FlatButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  picker: PropTypes.bool,
  centered: PropTypes.bool,
  full: PropTypes.bool,
};

export default FlatButton;
