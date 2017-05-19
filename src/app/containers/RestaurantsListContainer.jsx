import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {func} from 'prop-types';

import RestaurantsList from '../components/restaurants/RestaurantsList.jsx';
import Spinner from '../components/utils/Spinner.jsx';

import * as restaurantActions from '../actions/restaurantActions';
import * as reservationActions from '../actions/reservationActions';

class RestaurantsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
    };
  }

  componentDidMount() {
    this.showSpinner();
    this.props.getRestaurantsRequest(this.props.location.query)
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
        <RestaurantsList
          sendReservationRequest={this.props.sendReservationRequest}
          restaurants={this.props.restaurants}
        />
      </Spinner>
    );
  }

}

RestaurantsListContainer.propTypes = {
  getRestaurantsRequest: func.isRequired,
  sendReservationRequest: func.isRequired,
};

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(Object.assign(restaurantActions, reservationActions), dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(RestaurantsListContainer);
