import React from 'react';
import moment from 'moment';
import {func} from 'prop-types';
import Modal from 'react-modal';

class ReservationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      activeRestaurant: {
        id: 1,
        name: 'Mock Restaurant Name',
      },
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
    this.closeModal = this.closeModal.bind(this);
  }
  render() {
    return (
      <Modal
        className="reservation-modal"
        isOpen={this.state.isModalVisible}
        contentLabel="ReservationModal"
        onRequestClose={this.closeModal}
        shouldCloseOnOverlayClick
      >
        <div className="restaurant-name">
          <label> Rezerwujesz stolik w {this.state.activeRestaurant.name}</label>
        </div>

        <button onClick={this.closeModal}>
          ZAMKNIJ MODAL
        </button>

        <div className="reservation-information">
          {/* DATA */}
            <div className="reservation-date">
              <label>DATA</label>
              <input
                defaultValue="2017-05-20"
                onChange={(event) => {
                  this.setState(Object.assign(this.state.reservation, {reservationBegin: moment(`${event.target.value}T${moment(this.state.reservation).format('HH:mm')}`)}));
                }}
              />
            </div>

            {/* GODZINA */}
            <div className="reservation-hour">
              <label>GODZINA</label>
              <select
                onChange={(event) => {
                  this.setState(Object.assign(this.state.reservation, {reservationBegin: moment(`${moment(this.state.reservation).format('YYYY-MM-DD')}T${event.target.value}`)}));
                }}
              >
                {this.renderHours()}
              </select>
            </div>

            {/* LICZBA OSOB */}
            <div className="reservation-people">
              <label>LICZBA OSOB</label>
              <input
                defaultValue="5"
                onChange={(event) => this.changeInput(event, 'peopleNumber')}
              />
            </div>
          </div>

          <div className="personal-data">

            {/* IMIE */}
            <div className="input-person-name">
              <input
                defaultValue="Marek"
                onChange={(event) => this.changeInput(event, 'name')}
              />
            </div>

            {/* NAZWISKO */}
            <div className="input-person-surname">
              <input
                defaultValue="Gontarek"
                onChange={(event) => this.changeInput(event, 'surname')}
              />
            </div>

            {/* NUMER TELEFON */}
            <div className="input-tel-number">
              <input
                defaultValue="+48600500400"
                onChange={(event) => this.changeInput(event, 'phoneNumber')}
              />
            </div>

            {/* EMAIL */}
            <div className="input-email">
              <input
                defaultValue="guest@tablebooking.com"
                onChange={(event) => this.changeInput(event, 'email')}
              />
            </div>
          </div>

          <div className="confirm-reservation">
            <button onClick={this.sendReservation}>
              ZAREZERWUJ
            </button>
          </div>

      </Modal>
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
    this.props.sendReservationRequest(this.state.reservation, this.state.activeRestaurant.id);
  }

  changeInput(event, name) {
    this.setState(Object.assign(this.state.reservation, {[name]: event.target.value}));
  }

  openModal() {
    this.setState({isModalVisible: true });
  }

  closeModal() {
    this.setState({isModalVisible: false });
  }

}

ReservationModal.propTypes = {
  sendReservationRequest: func.isRequired,
};

export default ReservationModal;
