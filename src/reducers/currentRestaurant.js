function currentRestaurant(state = {}, action) {
  switch (action.type) {
  case 'CHANGE_CURRENT_RESTAURANT':
    return action.restaurant;
  default:
    return state;
  }
}

export default currentRestaurant;
