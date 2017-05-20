import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../utils/FlatButton.jsx';
import SearchInput from '../utils/SearchInput.jsx';

class RestaurantsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Wyszukaj...',
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
    this.setState({placeholder: ''});
  }

  onSearchBlur() {
    this.setState({placeholder: 'Wyszukaj...'});
  }

  render() {
    return (
      <div className="menu-component">
        <div className="menu-content">
          <div className="search-bar">
            <SearchInput
              placeholder={this.state.placeholder}
              onChange={(event) => this.changeSearchInput(event)}
              onClick={this.hiddenPlaceholder}
              onBlur={this.onSearchBlur}
            />
          </div>
          <div className="button">
            <FlatButton onClick={(event) => this.changeMenuLayout(event)}>
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
  placeholder: PropTypes.string,
};

export default RestaurantsMenu;
