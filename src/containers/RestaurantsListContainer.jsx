import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {func} from 'prop-types';

import RestaurantsList from '../components/restaurants/RestaurantsList.jsx';

import * as restaurantActions from '../actions/restaurantActions';

class RestaurantsListContainer extends React.Component {

  componentDidMount() {
    this.props.getRestaurantsRequest();
  }

  render() {
    return (
      <RestaurantsList />
    );
  }

}

RestaurantsListContainer.propTypes = {
  getRestaurantsRequest: func.isRequired,
};

function mapStateToProps(state) {
  return {
    employeeDay: state.employeeDay,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(Object.assign(restaurantActions), dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(RestaurantsListContainer);
