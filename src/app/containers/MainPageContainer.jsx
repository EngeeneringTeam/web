import React from 'react';

import MainPage from '../components/mainPage/MainPage.jsx';

class MainPageContainer extends React.Component {

  render() {
    return (
      <MainPage
        citiesData={CITIES_DATA}
      />
    );
  }

}

export default MainPageContainer;

const CITIES_DATA = [
  {
    id: 1,
    name: 'poznań',
  },
  {
    id: 2,
    name: 'brudzew',
  },
  {
    id: 3,
    name: 'nekla',
  },
  {
    id: 4,
    name: 'warszawa',
  },
  {
    id: 5,
    name: 'gorzów wielkopolski',
  },
];
