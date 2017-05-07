import React from 'react';
import {array} from 'prop-types';
import ArrowSVG from '../svg/ArrowSVG.jsx';
import FlatButton from './flatButton.jsx';

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
  }
  toggleHidden() {
    this.setState({isHidden: this.state.isHidden ? false : true});
  }
  handleClick(e) {
    this.setState({default: e.target.value});
    this.setState({isHidden: this.state.isHidden ? false : true});
  }
  render() {
    return (
      <div className="city-picker-component">
        <FlatButton onClick={this.toggleHidden} className="test"><ArrowSVG/>{this.state.default}</FlatButton>
      <button type="button" className="city-picker-content" onClick={this.toggleHidden}><ArrowSVG/>{this.state.default}</button>
      {/* <ArrowSVG /> */}
        {!this.state.isHidden &&
          <div className="city-picker-toggle">
            <ul>
              {
                this.state.cities.map( (cities, index) => {
                  return (
                    <li key={index}>
                      <button value={cities.name} onClick={(e) => this.handleClick(e)}>{cities.name}</button>
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
