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
    this.changeSearchInput = this.changeSearchInput.bind(this);
    this.changeMenuLayout = this.changeMenuLayout.bind(this);
    this.hiddenPlaceholder = this.hiddenPlaceholder.bind(this);
    this.onSearchBlur = this.onSearchBlur.bind(this);
  }

  showSettings(event) {
    event.preventDefault();
  }

  changeSearchInput(text) {
    this.props.checkInputValue(text);
  }

  changeMenuLayout() {
    this.props.changeLayout();
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
              onChange={(event) => this.changeSearchInput(event)}
              onClick={this.hiddenPlaceholder}
              onBlur={this.onSearchBlur}
            />
          </div>
          <div className="button">
            <FlatButton onClick={() => this.changeMenuLayout()}>
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
