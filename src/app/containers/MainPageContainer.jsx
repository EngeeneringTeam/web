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
    name: 'Poznań',
  },
  {
    id: 2,
    name: 'Brudzew',
  },
  {
    id: 3,
    name: 'Nekla',
  },
  {
    id: 4,
    name: 'Warszawa',
  },
  {
    id: 5,
    name: 'Gorzów Wielkopolski',
  },
];
