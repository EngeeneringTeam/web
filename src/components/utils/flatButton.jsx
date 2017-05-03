import React from 'react';
import {string, func} from 'prop-types';

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
  onClick: func,
  children: string,
};

export default FlatButton;
