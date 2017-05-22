import React from 'react';
// import { object, func } from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FlatButton from '../utils/FlatButton.jsx';
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
          <div className="forty item">
            <div className="test">
              
            </div>
          </div>
          <div className="sixty item">
            <p>.sixty</p>
          </div>
        </div>

        <div className="grid-flex">
          <div className="full">

            <Tabs defaultIndex={1}>
              <TabList>
                <Tab>Informacje</Tab>
                <Tab>Komentarze</Tab>
              </TabList>
              <TabPanel>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </TabPanel>
              <TabPanel>
                <div className="comments">
                    <div className="comment-wrap">
                      <div className="item">
                        <textarea placeholder="Wpisz komentarz..."/>
                      </div>
                    </div>
                		<div className="comment-wrap">
                				<div className="photo">
                          <img className="avatar" src="/assets/photo.jpg"/>
                				</div>
                				<div className="comment-block item">
                            <div className="top-comment">
                              <p>Nazwa użytkownika</p>
                              <p>27 maj 2017</p>
                            </div>
                						<p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi
                								sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</p>
                				</div>
                		</div>
                  </div>
              </TabPanel>
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
