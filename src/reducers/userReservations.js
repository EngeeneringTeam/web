function userReservations(state = [], action) {
  switch (action.type) {
  case 'CHANGE_USER_RESERVATIONS':
    return action.userReservations;
  default:
    return state;
  }
}

export default userReservations;
