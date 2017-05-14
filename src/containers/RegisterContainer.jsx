import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { array, func, object } from 'prop-types';

import Register from '../components/login/Register.jsx';
import Spinner from '../components/utils/Spinner.jsx';

import * as userActions from '../actions/userActions';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
    };
  }

  showSpinner() {
    this.setState({ spinner: true });
  }

  hideSpinner() {
    this.setState({ spinner: false });
  }

  render() {
    return (
      <Spinner visible={this.state.spinner}>
        <Register
          showSpinner={this.showSpinner}
          hideSpinner={this.hideSpinner}
          sendNewUserRequest={this.props.sendNewUserRequest}
        />
      </Spinner>
    );
  }

}

RegisterContainer.propTypes = {
  sendNewUserRequest: func.isRequired,
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(Object.assign(userActions), dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(RegisterContainer);
