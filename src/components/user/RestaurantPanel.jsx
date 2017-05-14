import React from 'react';
import { object, array } from 'prop-types';

class RestaurantPanel extends React.Component {

  render() {
    return (
      <div>
        <div style={{border: '1px solid black'}}>
          <h1>RestaurantPanel</h1>
          <h3>Restaurant ID: {this.props.user.id}</h3>
          <h3>Restaurant Name: {this.props.user.name}</h3>
          <h3>Restaurant City: {this.props.user.city}</h3>
          <h3>Restaurant Capacity: {this.props.user.capacity}</h3>
        </div>
        <div style={{border: '1px solid black'}}>
          <h1>Restaurant Reservations</h1>
          {
            this.props.userReservations.map((reservation) => {
              return (
                <div style={{border: '1px solid grey'}}>
                  <h3>ID: {reservation.id}</h3>
                  <h3>START: {reservation.reservationBegin}</h3>
                  <h3>LENGTH: {reservation.length}</h3>
                  <h3>END: {reservation.reservationEnd}</h3>
                  <h3>peopleNumber: {reservation.peopleNumber}</h3>
                  <h3>state: {reservation.state}</h3>
                  <h3>CUSTOMER NAME: {reservation.customer.name}</h3>
                  <h3>CUSTOMER SURNAME: {reservation.customer.surname}</h3>
                  <h3>CUSTOMER EMAIL: {reservation.customer.email}</h3>
                  <h3>CUSTOMER PHONE: {reservation.customer.phoneNumber}</h3>
                  <h3>CUSTOMER ID: {reservation.customer.id}</h3>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}


RestaurantPanel.propTypes = {
  user: object.isRequired,
  userReservations: array.isRequired,
};

export default RestaurantPanel;
