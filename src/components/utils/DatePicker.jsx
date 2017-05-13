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
        <div className="select-day minus-day"><ArrowSVG /></div>
        <DatePicker
          className="picker"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      <div className="select-day plus-day"><ArrowSVG /></div>
      </div>
    );
  }
}

DatePickerComponent.propTypes = {

};

export default DatePickerComponent;
