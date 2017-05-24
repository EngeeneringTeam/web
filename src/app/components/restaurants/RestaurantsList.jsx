import React from 'react';
import PropTypes from 'prop-types';

import ReservationModal from './ReservationModal.jsx';
import RestaurantsMenu from './RestaurantsMenu.jsx';
import RestaurantItem from './RestaurantItem.jsx';

class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListLayout: false,
      searchArray: [],
    };
    this.openModal = this.openModal.bind(this);
    this.checkInputValue = this.checkInputValue.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurants !== this.props.restaurants) {
      this.setState({searchArray: this.props.restaurants});
    }
  }

  checkInputValue(value) {
    const FILTER_DATA = this.props.restaurants.filter((element) => {return element.name.toLowerCase().includes(value.toLowerCase());});
    this.setState({searchArray: FILTER_DATA});
  }

  changeLayout() {
    this.setState({ isListLayout: !this.state.isListLayout });
  }

  openModal(restaurant) {
    this.refs.ReservationModal.openModal(restaurant);
  }

  render() {
    return (
      <div>
        <ReservationModal
          sendReservationRequest={this.props.sendReservationRequest}
          ref="ReservationModal"
        />
        <RestaurantsMenu checkInputValue={this.checkInputValue} changeLayout={this.changeLayout}/>
        <div className="container">
          <div data-view={`${this.state.isListLayout ? 'list' : 'grid'}-view`} className="items">
            {
              this.state.searchArray.map( (data, index) => {
                return (
                  <RestaurantItem data={data} key={index} openModal={this.openModal}/>
                );
              })
            }
          </div>
        </div>
    </div>
    );
  }
}

RestaurantsList.propTypes = {
  sendReservationRequest: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantsList;
