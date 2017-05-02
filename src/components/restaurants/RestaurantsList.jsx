import React from 'react';

import StarSVG from '../svg/StarSVG.jsx';
import LocalizationSVG from '../svg/LocalizationSVG.jsx';
import FlatButton from '../utils/flatButton.jsx';

class RestaurantsList extends React.Component {
  render() {
    return (
      <div className="grid">
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
              <FlatButton>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton>
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
              <FlatButton>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton>
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
              <FlatButton>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton>
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
              <FlatButton>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton>
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
              <FlatButton>
              {'rezerwacja'}
              </FlatButton>
            </div>
            <div className="right">
              <FlatButton>
                {'restauracja'}
              </FlatButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default RestaurantsList;
