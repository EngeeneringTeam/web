function restaurants(state = [], action) {
  switch (action.type) {
  case 'CHANGE_EMPLOYEE_DAY':
    return actions.restaurants;
  default:
    return state;
  }
}

export default restaurants;
