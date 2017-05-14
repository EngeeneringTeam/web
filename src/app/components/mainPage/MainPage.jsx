import React from 'react';
import IntroductionSection from './IntroductionSection.jsx';

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
        <IntroductionSection />
    </div>
    );
  }

}

export default MainPage;
