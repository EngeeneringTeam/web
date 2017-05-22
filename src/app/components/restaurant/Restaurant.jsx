import React from 'react';
// import { object, func } from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// import Reservation from './Reservation.jsx';

class Restaurant extends React.Component {
  render() {
    return (
      <div className="grid-flex-container">
        {/* <div className="grid-flex image">
          <div className="full">
            <img src="/assets/photo-2.jpg"/>
          </div>
        </div> */}
        {/* <div className="grid-flex">
          <div className="ten">
            <p>.ten</p>
          </div>
          <div className="ninety">
            <p>.ninety</p>
          </div>
        </div> */}

        {/* <div className="grid-flex">
          <div className="twenty">
            <p>.twenty</p>
          </div>
          <div className="eighty">
            <p>.eighty</p>
          </div>
        </div> */}

        {/* <div className="grid-flex">
          <div className="thirty">
            <p>.thirty</p>
          </div>
          <div className="seventy">
            <p>.seventy</p>
          </div>
        </div> */}

        <div className="grid-flex">
          <div className="forty">
            <p>.forty</p>
          </div>
          <div className="sixty">
            <p>.sixty</p>
          </div>
        </div>

        <div className="grid-flex">
          <div className="full">

            <Tabs defaultIndex={0}>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>
              <TabPanel>as</TabPanel>
            <TabPanel>dd</TabPanel>
            </Tabs>

          </div>
        </div>
        {/* <div className="grid-flex">
          <div className="fifty">
            <p>.fifty</p>
          </div>
          <div className="fifty">
            <p>.fifty</p>
          </div>
        </div> */}

        {/* <div className="grid-flex">
          <div className="quarter">
            <p>.quarter</p>
          </div>
          <div className="threequarter">
            <p>.threequarter(s)</p>
          </div>
        </div> */}

        {/* <div className="grid-flex">
          <div className="third">
            <p>.third</p>
          </div>
          <div className="twothird">
            <p>.twothird(s)</p>
          </div>
        </div> */}

        {/* <div className="grid-flex">
          <div className="half">
            <p>.half</p>
          </div>
          <div className="half">
            <p>.half</p>
          </div>
        </div> */}
      </div>
    );
  }

}

export default Restaurant;
