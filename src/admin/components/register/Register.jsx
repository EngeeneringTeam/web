import React from 'react';
import { browserHistory } from 'react-router';
import { array, func } from 'prop-types';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: 'new@table.com',
        name: 'Newowski',
        surname: 'Tablowski',
        restaurantName: 'Table Book Restaurant',
        restaurantCity: 'Warszawa',
        restaurantStreet: 'ul. Testowa',
        restaurantLatitude: '0.0',
        restaurantLongitude: '0.0',
        restaurantAvgReservationTime: 'PT30M',
        restaurantNip: '725-18-01-126',
        restaurantCapacity: '20',
      },
    };
    this.sendNewUser = this.sendNewUser.bind(this);
  }
  render() {
    return (
      <div className="register-component">
        Register component
        email:
        <input
          defaultValue={'new@table.com'}
          onChange={(event) => this.changeInput(event, 'email')}
        />
        <br/>
        name:
        <input
          defaultValue={'Newowski'}
          onChange={(event) => this.changeInput(event, 'name')}
        />
        <br/>
        surname:
        <input
          defaultValue={'Tablowski'}
          onChange={(event) => this.changeInput(event, 'surname')}
        />
        <br/>
        restaurantName:
        <input
          defaultValue={'Table Book Restaurant'}
          onChange={(event) => this.changeInput(event, 'restaurantName')}
        />
        <br/>
        restaurantCity:
        <input
          defaultValue={'Warszawa'}
          onChange={(event) => this.changeInput(event, 'restaurantCity')}
        />
        <br/>
        restaurantStreet:
        <input
          defaultValue={'ul. Testowa'}
          onChange={(event) => this.changeInput(event, 'restaurantStreet')}
        />
        <br/>
        restaurantLatitude:
        <input
          defaultValue={'0.0'}
          onChange={(event) => this.changeInput(event, 'restaurantLatitude')}
        />
        <br/>
        restaurantLongitude:
        <input
          defaultValue={'0.0'}
          onChange={(event) => this.changeInput(event, 'restaurantLongitude')}
        />
        <br/>
        restaurantAvgReservationTime:
        <input
          defaultValue={'PT30M'}
          onChange={(event) => this.changeInput(event, 'restaurantAvgReservationTime')}
        />
        <br/>
        restaurantNip:
        <input
          defaultValue={'725-18-01-126'}
          onChange={(event) => this.changeInput(event, 'restaurantNip')}
        />
        <br/>
        restaurantCapacity:
        <input
          defaultValue={'20'}
          onChange={(event) => this.changeInput(event, 'restaurantCapacity')}
        />
        <br/>
        <button
          onClick={this.sendNewUser}
        />
      </div>
    );
  }

  sendNewUser() {
    this.props.sendNewUserRequest(this.state.user);
  }

  changeInput(event, name) {
    this.setState(Object.assign(this.state.user, {[name]: event.target.value}));
  }

  onPressButton() {
    browserHistory.push('/login');
  }

}

Register.propTypes = {
  userReservations: array.isRequired,
  sendNewUserRequest: func.isRequired,
};

export default Register;
