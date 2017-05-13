import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { array, func, object } from 'prop-types';

import Restaurant from '../components/restaurant/Restaurant.jsx';
import Spinner from '../components/utils/Spinner.jsx';

import * as restaurantActions from '../actions/restaurantActions';
import * as reservationActions from '../actions/reservationActions';

class RestaurantContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
    };
  }

  componentDidMount() {
    this.showSpinner();
    this.props.getRestaurantRequest()
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
        <Restaurant
          restaurant={this.props.currentRestaurant}
        />
      </Spinner>
    );
  }

}

RestaurantContainer.propTypes = {
  restaurants: array.isRequired,
  getRestaurantRequest: func.isRequired,
  currentRestaurant: object.isRequired,
};

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    currentRestaurant: state.currentRestaurant,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(Object.assign(restaurantActions, reservationActions), dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(RestaurantContainer);
