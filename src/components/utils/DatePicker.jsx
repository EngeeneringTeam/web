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
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <div className="date-picker">
        <button className="select-day minus-day"><ArrowSVG /></button>
        <DatePicker
          className="picker"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      <button className="select-day plus-day"><ArrowSVG /></button>
      </div>
    );
  }
}

DatePickerComponent.propTypes = {

};

export default DatePickerComponent;
