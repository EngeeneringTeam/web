import React from 'react';
import {} from 'prop-types';
import moment from 'moment';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class HourPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startTime: moment({hour: '12:00'}),
      isHidden: true,
    };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
    this.openDropDown = this.openDropDown.bind(this);
    this.chooseHour = this.chooseHour.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
  }

  decrease() {
    this.setState({startTime: moment(this.state.startTime).add(-15, 'minutes')});
  }

  increase() {
    this.setState({startTime: moment(this.state.startTime).add(15, 'minutes')});
  }

  openDropDown() {
    this.setState({isHidden: !this.state.isHidden});
  }

  closeDropDown() {
    this.setState({isHidden: true});
  }

  chooseHour(event) {
    this.setState(Object.assign(this.state, {startTime: moment(`${moment(this.state).format('YYYY-MM-DD')}T${event.target.value}`)}));
  }

  renderHours() {
    const temp = [];
    for (let i = moment({hour: '00:00'}); i.valueOf() < moment({hour: '24:00'}); i.add(15, 'minutes')) {
      temp.push(
        <li key={i}>
          <button value={i.format('HH:mm')} onMouseDown={(event) => this.chooseHour(event)}>
            {i.format('HH:mm')}
          </button>
        </li>
      );
    }
    return temp;
  }

  render() {
    return (
      <div className="hour-picker-component" onBlur={() => this.closeDropDown()}>
        <button className="select-hour minus-hour" onClick={this.decrease}>
          <ArrowSVG />
        </button>
        <button
          type="button"
          className="hour-picker-content"
          value={moment(this.state.startTime).format('HH:mm')}
          onClick={this.openDropDown}
        >
          {moment(this.state.startTime).format('HH:mm')}
        </button>
        {!this.state.isHidden &&
          <div className="hour-picker-toggle">
            <ul>{this.renderHours()}</ul>
          </div>
        }
        <button className="select-hour plus-hour" onClick={this.increase}>
          <ArrowSVG />
        </button>
      </div>
    );
  }
}

HourPicker.propTypes = {

};

export default HourPicker;
