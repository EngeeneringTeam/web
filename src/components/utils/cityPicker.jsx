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

    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleHidden2 = this.toggleHidden2.bind(this);
  }

  toggleHidden() {
    this.setState({isHidden: false});
    console.log('1');
  }

  toggleHidden2() {
    this.setState({isHidden: true});
    console.log('2');
  }

  handleClick(event) {
    this.setState({default: event.target.value});
    this.setState({isHidden: true});
    console.log(this.state.isHidden);
  }


  render() {
    return (
      <div className="city-picker-component" >
        <button type="button" className="city-picker-content"  onClick={this.toggleHidden}>
          {this.state.default}
          <ArrowSVG />
        </button>
        {!this.state.isHidden &&
          <div className="city-picker-toggle"  >
            <ul>
              {
                this.state.cities.map( (cities, index) => {
                  return (
                    <li key={index}>
                      <button value={cities.name} onClick={(event) => this.handleClick(event)}>
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
