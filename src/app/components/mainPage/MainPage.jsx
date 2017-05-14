import React from 'react';
import IntroductionPage from './IntroductionPage.jsx';

class MainPage extends React.Component {


  render() {
    return (
      <div className="main-page-component">
        <div className="first-view">
          <div className="logo">L</div>
          <div className="select-div">
            <div className="select-bar">Select-bar</div>
          </div>
        </div>
        <IntroductionPage />
    </div>
    );
  }

}

export default MainPage;
