import React from 'react';
import PropTypes from 'prop-types';

import ArrowSVG from '../svg/ArrowSVG.jsx';

class PeoplePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: '1',
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  increase() {
    if (this.state.count === '') {
      this.setState({count: 1});
      this.props.onChange(1);
    } else if (parseInt(this.state.count, 10) !== 50) {
      this.setState({count: parseInt(this.state.count, 10) + 1});
      this.props.onChange(parseInt(this.state.count, 10) + 1);
    }
  }

  decrease() {
    if (this.state.count === '') {
      this.setState({count: 0});
      this.props.onChange(0);
    } else if (parseInt(this.state.count, 10) !== 0) {
      this.setState({count: parseInt(this.state.count, 10) - 1});
      this.props.onChange(parseInt(this.state.count, 10) - 1);
    }
  }

  handleOnChange(event) {
    const INPUT_PATTERN = /^(([1-4]{0,1}[0-9]{0,1})|50?|)$/;
    if (INPUT_PATTERN.test(event.target.value)) {
      this.setState({ count: event.target.value });
    }
  }

  render() {
    return (
      <div className="people-picker">
        <button className="change-button decrease" onClick={this.decrease}>
          <ArrowSVG />
        </button>
        <div className="counter">
          <input type="text" className="counter-value"
              onChange={this.handleOnChange}
              value={this.state.count}
              maxLength="2"
           />
          <label className="counter-info">ILOŚĆ OSÓB</label>
        </div>
        <button className="change-button increase" onClick={this.increase}>
          <ArrowSVG />
        </button>
      </div>
    );
  }
}

PeoplePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PeoplePicker;
