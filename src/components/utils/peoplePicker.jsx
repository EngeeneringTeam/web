import React from 'react';
import ArrowSVG from '../svg/ArrowSVG.jsx';

class PeoplePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(event) {
    event.preventDefault();
    const currCount = this.state.count;
    if (currCount !== 50) {
      this.setState({count: currCount + 1});
    }
  }

  decrease(event) {
    event.preventDefault();
    const currCount = this.state.count;
    if (currCount !== 0) {
      this.setState({count: currCount - 1});
    }
  }

  render() {
    return (
      <div className="people-picker">
        <button className="change-button decrease" onClick={this.decrease}>
          <ArrowSVG />
        </button>
        <div className="counter">
          {this.state.count}
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

};

export default PeoplePicker;
