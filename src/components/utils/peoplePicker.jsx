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

  increase(e) {
    e.preventDefault();
    let currCount = this.state.count;
    if (currCount !== 50) {
      currCount += 1;
    }
    this.setState({count: currCount});
  }
  decrease(e) {
    e.preventDefault();
    let currCount = this.state.count;
    if (currCount !== 0) {
      currCount -= 1;
    }
    this.setState({count: currCount});
  }

  render() {
    return (
      <div className="people-picker">
        <button className="change-button decrease"  onClick={this.decrease}><ArrowSVG /></button>
        <div className="counter">
          {this.state.count}
          <label className="counter-info">ILOŚĆ OSÓB</label>
        </div>

        <button className="change-button increase" onClick={this.increase}><ArrowSVG /></button>
      </div>
    );
  }
}

PeoplePicker.propTypes = {

};

export default PeoplePicker;
