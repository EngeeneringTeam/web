import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../utils/FlatButton.jsx';
import SearchInput from '../utils/SearchInput.jsx';

class RestaurantsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaceholderVisible: true,
    };
    this.hiddenPlaceholder = this.hiddenPlaceholder.bind(this);
    this.onSearchBlur = this.onSearchBlur.bind(this);
  }

  hiddenPlaceholder() {
    this.setState({isPlaceholderVisible: false});
  }

  onSearchBlur() {
    this.setState({isPlaceholderVisible: true});
  }

  render() {
    return (
      <div className="menu-component">
        <div className="menu-content">
          <div className="search-bar">
            <SearchInput
              placeholder={this.state.isPlaceholderVisible ? 'Wyszukaj...' : ''}
              onChange={(value) => this.props.checkInputValue(value)}
              onClick={this.hiddenPlaceholder}
              onBlur={this.onSearchBlur}
            />
          </div>
          <div className="button">
            <FlatButton onClick={() => this.props.changeLayout()}>
                {'Zmień widok wyświetlania'}
            </FlatButton>
          </div>
        </div>
      </div>
    );
  }

}

RestaurantsMenu.propTypes = {
  checkInputValue: PropTypes.func,
  changeLayout: PropTypes.func,
};

export default RestaurantsMenu;
