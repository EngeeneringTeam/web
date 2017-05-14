function restaurants(state = [], action) {
  switch (action.type) {
  case 'CHANGE_RESTAURANTS':
    return action.restaurants;
  default:
    return state;
  }
}

export default restaurants;
