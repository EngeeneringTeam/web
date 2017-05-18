import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ArrowSVG from '../svg/ArrowSVG.jsx';

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
    this.props.onChange(date);
  }

  decrease() {
    if (this.state.startDate >= moment()) {
      const DAY = this.state.startDate.add(-1, 'day');
      this.setState({startDate: DAY});
      this.props.onChange(DAY);
    }
  }

  increase() {
    const DAY = this.state.startDate.add(1, 'day');
    this.setState({startDate: DAY});
    this.props.onChange(DAY);
  }

  render() {
    return (
      <div className="date-picker">
        <button className="select-day minus-day" onClick={this.decrease}>
          <ArrowSVG />
        </button>
        <DatePicker
          className="picker"
          selected={this.state.startDate}
          onChange={this.handleChange}
          locale="pl"
          dateFormat="DD.MM.YYYY"
          minDate = {moment()}
          readOnly
        />
        <button className="select-day plus-day" onClick={this.increase}>
          <ArrowSVG />
        </button>
      </div>
    );
  }
}

DatePickerComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;
