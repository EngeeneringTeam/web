import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {func} from 'prop-types';

import RestaurantsList from '../components/restaurants/RestaurantsList.jsx';
import Spinner from '../components/utils/Spinner.jsx';

import * as restaurantActions from '../actions/restaurantActions';

class RestaurantsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
    };
  }

  componentDidMount() {
    this.showSpinner();
    this.props.getRestaurantsRequest()
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
        <RestaurantsList />
      </Spinner>
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
