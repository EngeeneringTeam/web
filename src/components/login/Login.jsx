import React from 'react';
import { browserHistory } from 'react-router';

import PeoplePicker from '../utils/PeoplePicker.jsx';
import CityPicker from '../utils/Citypicker.jsx';

class Login extends React.Component {

  render() {
    return (
      <div className="login-component">
        Login component
        <PeoplePicker />
        <CityPicker />
      </div>
    );
  }

  onPressButton() {
    browserHistory.push('/register');
  }

}

export default Login;
