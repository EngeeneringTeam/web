import React from 'react';
import { browserHistory } from 'react-router';

class Register extends React.Component {

  render() {
    return (
      <div className="register-component">
        Register component
      </div>
    );
  }

  onPressButton() {
    browserHistory.push('/login');
  }

}

export default Register;
