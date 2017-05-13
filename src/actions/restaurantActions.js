import API from './api/defaultAPI';

export function getRestaurantsRequest() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      API
        .get('/restaurants')
        .then((body) => {
          dispatch({ type: 'CHANGE_RESTAURANTS', restaurants: body});
          resolve();
        })
        .catch((err) => {
          alert(err);
          reject();
        });
    });
  };
}
