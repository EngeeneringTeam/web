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

export function getRestaurantRequest() {
  return (dispatch, store) => {
    const RESTAURANT_ID = store().routing.locationBeforeTransitions.query.id;
    return new Promise((resolve, reject) => {
      API
        .get(`/restaurants/${RESTAURANT_ID}`)
        .then((body) => {
          dispatch({ type: 'CHANGE_CURRENT_RESTAURANT', restaurant: body});
          resolve();
        })
        .catch((err) => {
          alert(err);
          reject();
        });
    });
  };
}
