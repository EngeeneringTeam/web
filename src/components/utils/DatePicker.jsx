import React from 'react';
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
  }

  decrease() {
    const date = this.state.startDate;
    if (date >= moment()) {
      date.add(-1, 'day');
    }
    this.setState({startDate: date});
  }

  increase() {
    const date = this.state.startDate;
    date.add(1, 'day');
    this.setState({startDate: date});
  }

  render() {
    return (
      <div className="date-picker">
        <button className="select-day minus-day" onClick={this.decrease}><ArrowSVG /></button>
        <DatePicker
          className="picker"
          selected={this.state.startDate}
          onChange={this.handleChange}
          locale="pl"
          dateFormat="D dddd MMMM YYYY"
          minDate = {moment()}
        />
      <button className="select-day plus-day" onClick={this.increase}><ArrowSVG /></button>
      </div>
    );
  }
}

DatePickerComponent.propTypes = {

};

export default DatePickerComponent;
