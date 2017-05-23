import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import HomeSVG from '../svg/HomeSVG.jsx';
import ReservationSVG from '../svg/ReservationSVG.jsx';
import LocalizationSVG from '../svg/LocalizationSVG.jsx';
import FlatButton from '../utils/FlatButton.jsx';

class RestaurantItem extends React.Component {
  constructor(props) {
    super(props);
    this.openModalWindow = this.openModalWindow.bind(this);
  }
  openModalWindow() {
    this.props.openModal();
  }
  render() {
    return (
      <div className="item">
        <div className="rating">
          Ocena: {this.props.data.rate}
        </div>
        <div className="photo">
          <img src="/assets/photo-2.jpg"/>
        </div>
        <div className="item-content-box">
          <div className="content">
            <h3 className="item-content-box-title">{this.props.data.name}</h3>
            <h2 className="item-content-box-type">BAR</h2>
            <p className="item-content-box-localization">
              <LocalizationSVG width={15} height={15} />
              {this.props.data.street}, {this.props.data.city}
            </p>
            <div className="buttons">
              <FlatButton onClick={() => this.openModalWindow()} centered full>
                <ReservationSVG width={15} height={15} />
                <span>{'rezerwacja'}</span>
              </FlatButton>
              <FlatButton onClick={() => {browserHistory.push({pathname: '/restaurant', query: {id: this.props.data.id}});}} centered>
                <HomeSVG width={15} height={15} />
                <span>{'restauracja'}</span>
              </FlatButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

RestaurantItem.propTypes = {
  openModal: PropTypes.func,
  data: PropTypes.array,
};


export default RestaurantItem;
