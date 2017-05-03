import React from 'react';
import {string, func} from 'prop-types';

class FlatInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return (
      <input
        className="flat-input"
        type={this.props.type}
        placeholder={this.props.placeholder ? this.props.placeholder : ''}
        onChange={this.onChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }

  handleKeyPress(event) {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(event);
    }
  }

}

FlatInput.propTypes = {
  type: string,
  placeholder: string,
  onChange: func,
  onKeyPress: func,
};


export default FlatInput;
