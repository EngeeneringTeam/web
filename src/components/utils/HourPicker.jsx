import React from 'react';
import {} from 'prop-types';
import moment from 'moment';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class HourPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startTime: moment({hour: '12:00'}),
    };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.setState({startTime: moment(this.state.startTime).add(-15, 'minutes')});
  }

  increase() {
    this.setState({startTime: moment(this.state.startTime).add(15, 'minutes')});
  }

  renderHours() {
    const temp = [];
    for (let i = moment({hour: '00:00'}); i.valueOf() < moment({hour: '24:00'}); i.add(15, 'minutes')) {
      temp.push(<option key={i} value={i.format('HH:mm')}>{i.format('HH:mm')}</option>);
    }
    return temp;
  }

  render() {
    return (
      <div className="hour-picker-component">
        <button className="select-hour minus-hour" onClick={this.decrease}>
          <ArrowSVG />
        </button>
        <select
          className="hour-picker-select"
          value={moment(this.state.startTime).format('HH:mm')}
          onChange={(event) => {
            this.setState(Object.assign(this.state, {startTime: moment(`${moment(this.state).format('YYYY-MM-DD')}T${event.target.value}`)}));
          }}
        >
          {this.renderHours()}
        </select>
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
