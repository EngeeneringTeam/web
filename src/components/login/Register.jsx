import React from 'react';
import { browserHistory } from 'react-router';

import ExampleFlatButton from '../utils/exampleFlatButton.jsx';

class Register extends React.Component {

  render() {
    return (
      <div className="register-component">
        Register component
        <ExampleFlatButton
          onClick={this.onPressButton.bind(this)}
        >
          {'Go to Login Component'}
        </ExampleFlatButton>
      </div>
    );
  }

  onPressButton() {
    browserHistory.push('/login');
  }

}

export default Register;
