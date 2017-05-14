import React from 'react';
import {} from 'prop-types';
import moment from 'moment';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class HourPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startTime: moment('2017-05-20T00:00:00'),
    };
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
        <select
          className="hour-picker-select"
          onChange={(event) => {
            this.setState(Object.assign(this.state, {startTime: moment(`${moment(this.state).format('YYYY-MM-DD')}T${event.target.value}`)}));
          }}
        >
          {this.renderHours()}
          <ArrowSVG />
        </select>

      </div>
    );
  }
}

HourPicker.propTypes = {

};

export default HourPicker;
