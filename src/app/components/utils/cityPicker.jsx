import React from 'react';
import PropTypes from 'prop-types';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class CityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: 'Miasto',
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
    this.setState({
      isHidden: true,
      pickerValue: event.target.value,
    });
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="city-picker-component" onBlur={() => this.closeDropDown()}>
        <button type="button" className="city-picker-content" onClick={this.openDropDown}>
          <p>{this.state.pickerValue}</p>
          <ArrowSVG />
        </button>
        {!this.state.isHidden &&
          <div className="city-picker-toggle">
            <ul>
              {
                this.props.citiesData.map( (cities, index) => {
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
  citiesData: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CityPicker;
