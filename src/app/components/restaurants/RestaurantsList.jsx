import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import ReservationModal from './ReservationModal.jsx';
import HomeSVG from '../svg/HomeSVG.jsx';
import ReservationSVG from '../svg/ReservationSVG.jsx';
import FlatButton from '../utils/FlatButton.jsx';
import RestaurantsMenu from './RestaurantsMenu.jsx';

class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'grid',
      searchArray: [],
    };
    this.openModal = this.openModal.bind(this);
    this.checkInputValue = this.checkInputValue.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurants !== this.props.restaurants) {
      this.setState({searchArray: this.props.restaurants});
    }
  }

  checkInputValue(value) {
    const FILTER_DATA = this.props.restaurants.filter((element) => {return element.name.toLowerCase().includes(value.toLowerCase());});
    this.setState({searchArray: FILTER_DATA});
  }

  changeLayout() {
    if (this.state.layout === 'grid') {
      this.setState({layout: 'list'});
    } else {
      this.setState({layout: 'grid'});
    }
  }

  openModal(restaurant) {
    this.refs.ReservationModal.openModal(restaurant);
  }

  render() {
    return (
      <div>
        <ReservationModal
          sendReservationRequest={this.props.sendReservationRequest}
          ref="ReservationModal"
        />
        <RestaurantsMenu checkInputValue={this.checkInputValue} changeLayout={this.changeLayout}/>
        <div className="container">
          <div data-view={`${this.state.layout}-view`} className="items">
            {
              this.state.searchArray.map( (data, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="rating-test">
                      Ocena: {data.rate}
                    </div>
                    <div className="photo">
                      <img src="/assets/photo.jpg"/>
                    </div>
                    <div className="item-content-box">
                      <div className="content">
                        <h2 className="item-content-box-type">BAR</h2>
                        <h3 className="item-content-box-title">{data.name}</h3>
                        {/* <div className="rating">
                          <StarSVG/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
                          <p>{data.rating} opinii</p>
                        </div> */}
                        <p className="item-content-box-localization">
                          {data.street} <br/>
                          {data.city}
                        </p>
                        <div className="buttons">
                          <FlatButton onClick={this.openModal} centered full>
                            <ReservationSVG width={15} height={15} />
                            <span>{'rezerwacja'}</span>
                          </FlatButton>
                          <FlatButton onClick={() => {browserHistory.push({pathname: '/restaurant', query: {id: 2}});}} centered>
                            <HomeSVG width={15} height={15} />
                            <span>{'restauracja'}</span>
                          </FlatButton>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
    </div>
    );
  }
}

RestaurantsList.propTypes = {
  sendReservationRequest: PropTypes.func.isRequired,
  restaurants: PropTypes.array,
};

export default RestaurantsList;
