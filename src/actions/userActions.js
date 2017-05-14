import API from './api/defaultAPI';

export function getUserRestaurantRequest() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      API
        .get('/users/1/restaurants')
        .then((body) => {
          dispatch({ type: 'CHANGE_USER', user: body});
          resolve();
        })
        .catch((err) => {
          alert(err);
          reject();
        });
    });
  };
}

export function getUserReservationsRequest() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      API
        .get('/users/1/reservations')
        .then((body) => {
          dispatch({ type: 'CHANGE_USER_RESERVATIONS', userReservations: body});
          resolve();
        })
        .catch((err) => {
          alert(err);
          reject();
        });
    });
  };
}
