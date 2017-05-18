import API from './api/defaultAPI';

export function getRestaurantsRequest(params) {
  const QUERY_PARAMS = `?city=${params.city}&date=${params.date}&peopleNumber=${params.peopleNumber}`
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      API
        .get(`/restaurants/search${QUERY_PARAMS}`)
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
