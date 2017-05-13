import API from './api/defaultAPI';

export function sendReservationRequest(_reservation) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      API
        .post('/reservation', {
          reservationBegin: _reservation.reservationBegin,
          peopleNumber: _reservation.peopleNumber,
          customer: {
            email: _reservation.email,
            phoneNumber: _reservation.phoneNumber,
            name: _reservation.name,
            surname: _reservation.surname,
          },
        })
        .then((body) => {
          alert('OK', body);
          resolve();
        })
        .catch((err) => {
          alert(err);
          reject();
        });
    });
  };
}
