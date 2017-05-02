import React, {PropTypes} from 'react';

const FlatButton = (props) => (
  <button
    className="flat-button"
    onClick={props.onClick}
    type="button"
  >
    {props.children}
  </button>
);

FlatButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default FlatButton;
