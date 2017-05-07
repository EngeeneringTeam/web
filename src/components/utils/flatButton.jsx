import React, {PropTypes} from 'react';

const FlatButton = (props) => (
  <button
    className={`flat-button ${props.picker ? 'picker' : ''}`}
    onClick={props.onClick}
    type="button"
  >
    {props.children}
  </button>
);

FlatButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  picker: PropTypes.bool,
};

export default FlatButton;
