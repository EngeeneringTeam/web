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
              <label>Data: </label>
            <p>{this.state.reservation.reservationBegin.format('DD-MM-YYYY')}</p>
            </div>

            {/* GODZINA */}
            <div className="reservation-hour">
              <label>Godzina:</label>
            <p>{this.state.reservation.reservationBegin.format('HH:mm')}</p>
            </div>

            {/* LICZBA OSOB */}
            <div className="reservation-people">
                <label>Liczba osób: </label>
                <p>{this.state.reservation.peopleNumber}</p>
            </div>
          </div>

          <div className="next-step">
            <FlatButton
              // onClick={this.sendReservation}>
              DALEJ
            </FlatButton>
          </div>

      </Modal>
    );
  }

  // renderHours() {
  //   const temp = [];
  //   for (let i = moment({hour: '00:00'}); i.valueOf() < moment({hour: '24:00'}); i.add(15, 'minutes')) {
  //     temp.push(<option key={i} value={i.format('HH:mm')}>{i.format('HH:mm')}</option>);
  //   }
  //   return temp;
  // }

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
