import React from 'react';
import { browserHistory } from 'react-router';

import CityPicker from '../utils/cityPicker.jsx';

class Login extends React.Component {

  render() {
    return (
      <div className="login-component">
        Login component
        <CityPicker />
      </div>
    );
  }

  onPressButton() {
    browserHistory.push('/register');
  }

}

export default Login;
