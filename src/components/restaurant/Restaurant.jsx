import React from 'react';
import { object, func } from 'prop-types';

import Reservation from './Reservation.jsx';

class Restaurant extends React.Component {

  render() {
    return (
      <div>
        Restaurant
        <div>
          {this.props.restaurant.name}
        </div>
        <div>
          {this.props.restaurant.city}
        </div>
        <div>
          {this.props.restaurant.address}
        </div>
        <div>
          {this.props.restaurant.latitude}
        </div>
        <div>
          {this.props.restaurant.longitude}
        </div>
        <div>
          {this.props.restaurant.description}
        </div>
        <div>
          {this.props.restaurant.avgReservationTime}
        </div>
        <div>
          {this.props.restaurant.rate}
        </div>
        <div>
          {this.props.restaurant.service_rate}
        </div>
        <div>
          {this.props.restaurant.place_rate}
        </div>
        <div>
          {this.props.restaurant.price_quality_rate}
        </div>
        <div>
          {this.props.restaurant.nip}
        </div>
        <div>
          {this.props.restaurant.capacity}
        </div>
        <Reservation
          location={this.props.location}
          sendReservationRequest={this.props.sendReservationRequest}
        />
      </div>
    );
  }

}

Restaurant.propTypes = {
  restaurant: object.isRequired,
  location: object.isRequired,
  sendReservationRequest: func.isRequired,
};


export default Restaurant;