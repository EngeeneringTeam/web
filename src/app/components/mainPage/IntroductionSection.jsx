import React from 'react';
import {} from 'prop-types';


class IntroductionSection extends React.Component {


  render() {
    return (
    <div className="introduction-section">
        <div className="section-name">zarezerwuj stolik w kilku krokach</div>
        <div className="animated-section" >
          <div className="animated-section-img left">images</div>
          <div className="animated-section-describe"> jestem brdzo dużym opisem i mam cie dosyć </div>
        </div>
        <div className="animated-section" >
          <div className="animated-section-describe"> jestem brdzo dużym opisem i mam cie dosyć </div>
        <div className="animated-section-img right"> image </div>
      </div>
        <div className="animated-section" >
          <div className="animated-section-img left"> image </div>
          <div className="animated-section-describe"> jestem brdzo dużym opisem i mam cie dosyć </div>
        </div>
      </div>
    );
  }

}

IntroductionSection.propTypes = {
};

export default IntroductionSection;
