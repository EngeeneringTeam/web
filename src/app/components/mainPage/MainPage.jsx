import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import moment from 'moment';

import IntroductionSection from './IntroductionSection.jsx';
import CityPicker from '../utils/cityPicker.jsx';
import DatePicker from '../utils/DatePicker.jsx';
import HourPicker from '../utils/HourPicker.jsx';
import PeoplePicker from '../utils/peoplePicker.jsx';
import FlatButton from '../utils/flatButton.jsx';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        city: '',
        date: moment({hour: '12:00'}),
        peoples: 1,
      },
    };

    this.changeInput = this.changeInput.bind(this);
    this.changeDateInput = this.changeDateInput.bind(this);
    this.changeHourInput = this.changeHourInput.bind(this);
  }

  render() {
    return (
      <div className="main-page-component">
        <div className="first-view">
          <div className="logo">L</div>
          <div className="select-div">
            <label className="slogan slogan-name">Slogan</label>
            <label className="slogan descript">Krótki opis zachęcający</label>
            <div className="select-bar">
              <CityPicker
                citiesData={this.props.citiesData}
                onChange={(value) => {this.changeInput(value, 'city');}}
              />
              <DatePicker
              onChange={(value) => {this.changeDateInput(value);}}
              />
              <HourPicker
              onChange={(value) => {this.changeHourInput(value);}}
              />
              <PeoplePicker
              onChange={(value) => {this.changeInput(value, 'peoples');}}
              />
              <FlatButton onClick={() => {this.clickSearch();}}>
                SZUKAJ
                <ArrowSVG />
              </FlatButton>
            </div>
          </div>
        </div>
        <IntroductionSection />
    </div>
    );
  }

  clickSearch() {
    browserHistory.push({
      pathname: '/restaurants',
      query: {
        city: this.state.info.city,
        date: this.state.info.date.format(),
        peopleNumber: this.state.info.peoples,
      },
    });
  }

  changeInput(value, name) {
    this.setState(Object.assign(this.state.info, {[name]: value}));
  }

  changeDateInput(value) {
    const choosedDate = moment(`${value.format('YYYY-MM-DD')}T${moment(this.state.info.date).format('HH:mm')}`);
    this.setState(Object.assign(this.state.info, {date: choosedDate}));
  }

  changeHourInput(value) {
    const choosedHour = moment(`${moment(this.state.info.date).format('YYYY-MM-DD')}T${value}`);
    this.setState(Object.assign(this.state.info, {date: choosedHour}));
  }
}

MainPage.propTypes = {
  citiesData: PropTypes.array.isRequired,
};

export default MainPage;
