import React from 'react';
import IntroductionSection from './IntroductionSection.jsx';
import CityPicker from '../utils/cityPicker.jsx';
import DatePicker from '../utils/DatePicker.jsx';
import HourPicker from '../utils/HourPicker.jsx';
import PeoplePicker from '../utils/peoplePicker.jsx';
import FlatButton from '../utils/flatButton.jsx';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class MainPage extends React.Component {


  render() {
    return (
      <div className="main-page-component">
        <div className="first-view">
          <div className="logo">L</div>
          <div className="select-div">
            <label className="slogan slogan-name">Slogan</label>
            <label className="slogan descript">Krótki opis zachęcający</label>
            <div className="select-bar">
              <CityPicker />
              <DatePicker />
              <HourPicker />
              <PeoplePicker />
              <FlatButton>
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

}

export default MainPage;
