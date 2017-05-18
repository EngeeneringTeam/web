import React from 'react';
import moment from 'moment';
import {func} from 'prop-types';
import Modal from 'react-modal';
import CloseSVG from '../svg/CloseSVG.jsx';
import FlatInput from '../utils/flatInput.jsx';
import FlatButton from '../utils/flatButton.jsx';

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
        isOpen={true}
        // isOpen={this.state.isModalVisible}
        contentLabel="ReservationModal"
        onRequestClose={this.closeModal}
        shouldCloseOnOverlayClick
      >
        <div className="base-line">
          <div className="reservation-place">
            <label>
              <p className="restaurant-name">
                {this.state.activeRestaurant.name}
              </p>
            </label>
          </div>
          <button
            className="close-button"
            onClick={this.closeModal}
            >
              <CloseSVG />
          </button>
        </div>

        <div className="reservation-information">
          {/* DATA */}
            <div className="reservation-date">
              <FlatInput
                placeholder="2017-05-20"
                // pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}"
                onChange={(event) => {
                  this.setState(Object.assign(this.state.reservation, {reservationBegin: moment(`${event.target.value}T${moment(this.state.reservation).format('HH:mm')}`)}));
                }}
            />
            </div>

            {/* GODZINA */}
            <div className="reservation-hour">
              <select
                className="select-hour"
                onChange={(event) => {
                  this.setState(Object.assign(this.state.reservation, {reservationBegin: moment(`${moment(this.state.reservation).format('YYYY-MM-DD')}T${event.target.value}`)}));
                }}
              >
                {this.renderHours()}
              </select>
            </div>

            {/* LICZBA OSOB */}
            <div className="reservation-people">
              <FlatInput
                placeholder="5"
                onChange={(event) => this.changeInput(event, 'peopleNumber')}
              />
            </div>
          </div>

          <div className="inf-personal-data">
            <label>Wprowadź swoje dane</label>
          </div>

          <div className="personal-data">

            {/* IMIE */}
            <div className="person-name">
              <FlatInput
                // defaultValue="Marek"
                placeholder="Imię"
                onChange={(event) => this.changeInput(event, 'name')}
              />
            </div>

            {/* NAZWISKO */}
            <div className="person-surname">
              <FlatInput
                // defaultValue="Gontarek"
                placeholder="Nazwisko"
                onChange={(event) => this.changeInput(event, 'surname')}
              />
            </div>

            {/* NUMER TELEFON */}
            <div className="person-tel-number">
              <FlatInput
                // defaultValue="+48600500400"
                placeholder="Telefon"
                onChange={(event) => this.changeInput(event, 'phoneNumber')}
              />
            </div>

            {/* EMAIL */}
            <div className="person-email">
              <FlatInput
                // defaultValue="guest@tablebooking.com"
                placeholder="Email"
                onChange={(event) => this.changeInput(event, 'email')}
              />
            </div>
          </div>

          <div className="confirm-reservation">
            <FlatButton onClick={this.sendReservation}>
              ZAREZERWUJ
            </FlatButton>
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
