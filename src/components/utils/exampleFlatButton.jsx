import React, {PropTypes} from 'react';

const ExampleFlatButton = ({children, onClick}) => (
  <button
    className="example-flat-button"
    onClick={onClick}
  >
    {children}
  </button>
);

ExampleFlatButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default ExampleFlatButton;
