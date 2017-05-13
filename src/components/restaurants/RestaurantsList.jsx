import React from 'react';
import { browserHistory } from 'react-router';
import {func} from 'prop-types';

import ReservationModal from './ReservationModal.jsx';
import StarSVG from '../svg/StarSVG.jsx';
import LocalizationSVG from '../svg/LocalizationSVG.jsx';
import FlatButton from '../utils/flatButton.jsx';

class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  render() {
    return (
      <div className="grid">
        <ReservationModal
          sendReservationRequest={this.props.sendReservationRequest}
          ref="ReservationModal"
        />
        <div className="items">
          <div className="photo">
            <img src="/assets/photo.jpg" alt="photo"/>
          </div>
          <div className="details">
            <div className="title">Hola Hola</div>
            <div className="rating">
              <StarSVG id="active"/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
              <p>123 opinii</p>
            </div>
            <div className="description">
              <LocalizationSVG/>
              <p>Wrocławska 10, 60-101 Poznań</p>
            </div>
          </div>
          <div className="buttons">
            <div className="left">
              <FlatButton onClick={this.openModal}>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton onClick={() => {browserHistory.push({pathname: '/restaurant', query: {id: 1}});}}>
                {'restauracja'}
              </FlatButton>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="photo">
            <img src="/assets/photo.jpg" alt="photo"/>
          </div>
          <div className="details">
            <div className="title">Hola Hola</div>
            <div className="rating">
              <StarSVG id="active"/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
              <p>123 opinii</p>
            </div>
            <div className="description">
              <LocalizationSVG/>
              <p>Wrocławska 10, 60-101 Poznań</p>
            </div>
          </div>
          <div className="buttons">
            <div className="left">
              <FlatButton onClick={this.openModal}>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton onClick={() => {browserHistory.push({pathname: '/restaurant', query: {id: 1}});}}>
                {'restauracja'}
              </FlatButton>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="photo">
            <img src="/assets/photo.jpg" alt="photo"/>
          </div>
          <div className="details">
            <div className="title">Hola Hola</div>
            <div className="rating">
              <StarSVG id="active"/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
              <p>123 opinii</p>
            </div>
            <div className="description">
              <LocalizationSVG/>
              <p>Wrocławska 10, 60-101 Poznań</p>
            </div>
          </div>
          <div className="buttons">
            <div className="left">
              <FlatButton onClick={this.openModal}>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton onClick={() => {browserHistory.push({pathname: '/restaurant', query: {id: 1}});}}>
                {'restauracja'}
              </FlatButton>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="photo">
            <img src="/assets/photo.jpg" alt="photo"/>
          </div>
          <div className="details">
            <div className="title">Hola Hola</div>
            <div className="rating">
              <StarSVG id="active"/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
              <p>123 opinii</p>
            </div>
            <div className="description">
              <LocalizationSVG/>
              <p>Wrocławska 10, 60-101 Poznań</p>
            </div>
          </div>
          <div className="buttons">
            <div className="left">
              <FlatButton onClick={this.openModal}>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton onClick={() => {browserHistory.push({pathname: '/restaurant', query: {id: 1}});}}>
                {'restauracja'}
              </FlatButton>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="photo">
            <img src="/assets/photo.jpg" alt="photo"/>
          </div>
          <div className="details">
            <div className="title">Hola Hola</div>
            <div className="rating">
              <StarSVG id="active"/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
              <p>123 opinii</p>
            </div>
            <div className="description">
              <LocalizationSVG/>
              <p>Wrocławska 10, 60-101 Poznań</p>
            </div>
          </div>
          <div className="buttons">
            <div className="left">
              <FlatButton onClick={this.openModal}>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton onClick={() => {browserHistory.push({pathname: '/restaurant', query: {id: 1}});}}>
                {'restauracja'}
              </FlatButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  openModal(restaurant) {
    this.refs.ReservationModal.openModal(restaurant);
  }

}

RestaurantsList.propTypes = {
  sendReservationRequest: func.isRequired,
};

export default RestaurantsList;
