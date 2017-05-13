import API from './api/restaurantAPI';

export function getRestaurantsRequest() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      API
        .getRestaurants()
        .then((body) => {
          dispatch({ type: 'CHANGE_RESTAURANTS', restaurants: body});
          resolve();
        })
        .catch(() => {
          dispatch({ type: 'CHANGE_RESTAURANTS', restaurants: [{test: 'test'}]});
          reject();
        });
    });
  };
}
