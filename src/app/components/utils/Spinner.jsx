import React from 'react';
import {bool, element} from 'prop-types';

class Spinner extends React.Component {

  render() {
    return (
      <div className="spinner-container">
        {this.props.visible && <div className="spinner"/>}
        {this.props.children}
      </div>
    );
  }

}

Spinner.propTypes = {
  visible: bool.isRequired,
  children: element,
};

export default Spinner;
