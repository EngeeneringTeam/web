import React from 'react';
import {string, func} from 'prop-types';

import RemoveSVG from '../svg/RemoveSVG.jsx';
import SearchSVG from '../svg/SearchSVG.jsx';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <fieldset className="field-container">
        <input
          type="text"
          placeholder={this.props.placeholder ? this.props.placeholder : ''}
          className="field"
          onChange={this.onChange}
          onKeyPress={this.handleKeyPress}
          onClick={this.onClick}
          onBlur={this.props.onBlur}
        />
        <div className="icons-container">
          <div className="icon-search">
            <SearchSVG/>
          </div>
          <div className="icon-close">
            <RemoveSVG/>
          </div>
        </div>
      </fieldset>
    );
  }

  onClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
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

SearchInput.propTypes = {
  type: string,
  placeholder: string,
  onChange: func,
  onKeyPress: func,
  onClick: func,
  onBlur: func,
};


export default SearchInput;
