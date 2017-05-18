import React from 'react';
import {array} from 'prop-types';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class CityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 'Miasto',
      cities: [
        { name: 'Poznań'},
        { name: 'Brudzew'},
        { name: 'Nekla'},
        { name: 'Warszawa'},
        { name: 'Gorzów Wielkopolski'},
      ],
      isHidden: true,
    };

    this.openDropDown = this.openDropDown.bind(this);
    this.chooseCity = this.chooseCity.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
  }

  openDropDown() {
    this.setState({isHidden: !this.state.isHidden});
  }

  closeDropDown() {
    this.setState({isHidden: true});
  }

  chooseCity(event) {
    this.setState({default: event.target.value});
    this.setState({isHidden: true});
  }

  render() {
    return (
      <div className="city-picker-component" onBlur={() => this.closeDropDown()}>
        <button type="button" className="city-picker-content" onClick={this.openDropDown}>
          {this.state.default}
          <ArrowSVG />
        </button>
        {!this.state.isHidden &&
          <div className="city-picker-toggle">
            <ul>
              {
                this.state.cities.map( (cities, index) => {
                  return (
                    <li key={index}>
                      <button value={cities.name} onMouseDown={(event) => this.chooseCity(event)}>
                        {cities.name}
                      </button>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}

CityPicker.propTypes = {
  cities: array,
};

export default CityPicker;
