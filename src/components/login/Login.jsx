import React from 'react';
import { browserHistory } from 'react-router';

class Login extends React.Component {

  render() {
    return (
      <div className="login-component">
        Login component
      </div>
    );
  }

  onPressButton() {
    browserHistory.push('/register');
  }

}

export default Login;
