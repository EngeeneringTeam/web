import React from 'react';
import moment from 'moment';
import {func, object} from 'prop-types';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation: {
        name: 'Marek',
        surname: 'Gontarek',
        phoneNumber: '+48600500400',
        email: 'guest@tablebooking.com',
        peopleNumber: '5',
        reservationBegin: moment('2017-05-20T00:00:00'),
      },
    };
    this.sendReservation = this.sendReservation.bind(this);
  }
  render() {
    return (
      <div style={{border: '1px solid black'}}>
        Reservation
        <br/>
        imie:
        <input
          defaultValue="Marek"
          onChange={(event) => this.changeInput(event, 'name')}
        />
        <br/>
        nazwisko:
        <input
          defaultValue="Gontarek"
          onChange={(event) => this.changeInput(event, 'surname')}
        />
        <br/>
        telefon:
        <input
          defaultValue="+48600500400"
          onChange={(event) => this.changeInput(event, 'phoneNumber')}
        />
        <br/>
        email:
        <input
          defaultValue="guest@tablebooking.com"
          onChange={(event) => this.changeInput(event, 'email')}
        />
        <br/>
        ilosc osob:
        <input
          defaultValue="5"
          onChange={(event) => this.changeInput(event, 'peopleNumber')}
        />
        <br/>
        dzień:
        <input
          defaultValue="2017-05-20"
          onChange={(event) => {
            this.setState(Object.assign(this.state.reservation, {reservationBegin: moment(`${event.target.value}T${moment(this.state.reservation).format('HH:mm')}`)}));
          }}
        />
        <br/>
        startowa godzina:
        <select
          onChange={(event) => {
            this.setState(Object.assign(this.state.reservation, {reservationBegin: moment(`${moment(this.state.reservation).format('YYYY-MM-DD')}T${event.target.value}`)}));
          }}
        >
          {
            this.renderHours()
          }
        </select>

        <br/>
        <button onClick={this.sendReservation}>
          ZAREZERWUJ
        </button>
      </div>
    );
  }

  renderHours() {
    const temp = [];
    for (let i = moment({hour: '00:00'}); i.valueOf() < moment({hour: '24:00'}); i.add(15, 'minutes')) {
      temp.push(<option key={i} value={i.format('HH:mm')}>{i.format('HH:mm')}</option>);
    }
    return temp;
  }

  sendReservation() {
    this.props.sendReservationRequest(this.state.reservation, this.props.location.query.id);
  }

  changeInput(event, name) {
    this.setState(Object.assign(this.state.reservation, {[name]: event.target.value}));
  }

}

Reservation.propTypes = {
  location: object.isRequired,
  sendReservationRequest: func.isRequired,
};


export default Reservation;
