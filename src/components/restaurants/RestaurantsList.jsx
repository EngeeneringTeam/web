import React from 'react';
import { browserHistory } from 'react-router';

import StarSVG from '../svg/StarSVG.jsx';
import HomeSVG from '../svg/HomeSVG.jsx';
import FlatButton from '../utils/flatButton.jsx';

class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
    this.restaurants = [
      { name: 'Hola Hola', rating: '123', localization: 'Wrocławska 10, 60-101 Poznań' },
      { name: 'Ok', rating: '123', localization: 'Wrocławska 10, 60-101 Poznań' },
      { name: 'Loczek z WMI', rating: '123', localization: 'Wrocławska 10, 60-101 Poznań' },
      { name: 'Bar u Sary', rating: '123', localization: 'Wrocławska 10, 60-101 Poznań' },
      { name: 'Ąśćłżę', rating: '123', localization: 'Wrocławska 10, 60-101 Poznań' },
    ];
  }
  render() {
    return (
      <div className="grid">
        {
          this.restaurants.map( (restaurant) => {
            return (
              <div className="items">
                <div className="photo">
                  <img src="/assets/photo.jpg" alt="photo"/>
                </div>
                <div className="details">
                  <div className="title">{restaurant.name}</div>
                  <div className="rating">
                    <StarSVG id="active"/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
                    <p>{restaurant.rating} opinii</p>
                  </div>
                  <div className="description">
                    <HomeSVG/>
                    <p>{restaurant.localization}</p>
                  </div>
                </div>
                <div className="buttons">
                  <div className="left">
                    <FlatButton
                      onClick={this.onPressButton.bind(this)}
                    >
                    {'rezerwacja'}
                    </FlatButton>
                  </div>
                  <div className="right">
                    <FlatButton
                      onClick={this.onPressButton.bind(this)}
                    >
                      {'restauracja'}
                    </FlatButton>
                  </div>
                </div>
              </div>
            );
          })
          }
      </div>
    );
  }

  onPressButton() {
    browserHistory.push('/login');
  }

}

export default RestaurantsList;
