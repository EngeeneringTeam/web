import API from './api/restaurantAPI';

export function getRestaurantsRequest() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      API
        .getRestaurants()
        .then((body) => {
          console.log(body);
          dispatch({ type: 'CHANGE_RESTAURANTS', restaurants: body});
          resolve();
        })
        .catch(() => {
          console.log('getRestaurants catch');
          reject();
        });
    });
  };
}
