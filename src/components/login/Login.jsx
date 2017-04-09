import React from 'react';
import { browserHistory } from 'react-router';

import ExampleFlatButton from '../utils/exampleFlatButton.jsx';

class Login extends React.Component {

  render() {
    return (
      <div className="login-component">
        Login component
        <ExampleFlatButton
          onClick={this.onPressButton.bind(this)}
        >
          {'Go to Register Component'}
        </ExampleFlatButton>
      </div>
    );
  }

  onPressButton() {
    browserHistory.push('/register');
  }

}

export default Login;
