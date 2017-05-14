import React from 'react';
import Promise from 'bluebird';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import RestaurantPanel from '../components/user/RestaurantPanel.jsx';
import Spinner from '../components/utils/Spinner.jsx';

import * as userActions from '../actions/userActions';

class RestaurantContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
    };
  }

  componentDidMount() {
    this.showSpinner();
    Promise.mapSeries([
      this.props.getUserRestaurantRequest,
      this.props.getUserReservationsRequest,
    ], promise => {
      return promise();
    })
    .then(() => {
      this.hideSpinner();
    })
    .catch(() => {
      this.hideSpinner();
    });
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
        <RestaurantPanel
          user={this.props.user}
          userReservations={this.props.userReservations}
        />
      </Spinner>
    );
  }

}

RestaurantContainer.propTypes = {
  user: object.isRequired,
  userReservations: array.isRequired,
  getUserRestaurantRequest: func.isRequired,
  getUserReservationsRequest: func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    userReservations: state.userReservations,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(Object.assign(userActions), dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(RestaurantContainer);
