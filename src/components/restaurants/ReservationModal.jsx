import React from 'react';
import Modal from 'react-modal';

class ReservationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Marek',
      surname: 'Gontarek',
      phoneNumber: '+48600500400',
      email: 'guest@tablebooking.com',
      peopleNumber: '5',
      day: '11-06-2017',
      startHour: '15:00',
    };
  }
  render() {
    return (
      <Modal
        isOpen={true}
        onAfterOpen={()=>{}}
        onRequestClose={()=>{}}
        closeTimeoutMS={0}
        // style={customStyle}
        contentLabel="ReservationModal"
      >
        NAZWA RESTAURACJI W KTOREJ REZERWUJE STOLIK<br/>
        imie:
        <input
          defaultValue="Marek"
        />
        <br/>
        nazwisko:
        <input
          defaultValue="Gontarek"
        />
        <br/>
        telefon:
        <input
          defaultValue="+48600500400"/><br/>
        email:
        <input
          defaultValue="guest@tablebooking.com"/><br/>
        ilosc osob:
        <input
          defaultValue="5"
        />
        <br/>
        dzień:
        <input
          defaultValue="11-06-2017"
        />
        <br/>
        startowa godzina:
        <input
          defaultValue="15:00"
        />
        <br/>
        <button onClick={()=>{}}>
          ZAREZERWUJ
        </button>
      </Modal>
    );
  }

}

export default ReservationModal;
