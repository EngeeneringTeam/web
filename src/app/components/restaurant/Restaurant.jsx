import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FlatButton from '../utils/FlatButton.jsx';
import StarSVG from '../svg/StarSVG.jsx';

class Restaurant extends React.Component {
  render() {
    return (
      <div className="grid-flex-container">
        <div className="grid-flex image">
          <div className="full">
            <img src="/assets/photo-bg.jpg"/>
          </div>
        </div>
        <div className="grid-flex">
          <div className="forty info">
            <h1>{this.props.restaurant.name}</h1>
            <h3>{this.props.restaurant.street}<br/>{this.props.restaurant.city}</h3>
            <FlatButton full centered>{'Rezerwacja'}</FlatButton>
          </div>
          <div className="sixty rating">
            <div className="average">
                <h3>Średnia ocena użytkowników</h3>
              <h1>{this.props.restaurant.rate}<span>/5</span></h1>
                <div className="rate">
                  <StarSVG/><StarSVG/><StarSVG/><StarSVG/><StarSVG/>
                  <p>123 oddanych głosów</p>
                </div>
            </div>
              <div className="graph-panel">
                <div className="bar-graph-container">
                  <div className="bar-container">
                     <div className="five">
                       <p>5</p>
                      </div>
                  </div>
                  <div className="bar-container">
                     <div className="four">
                       <p>4</p>
                      </div>
                  </div>
                  <div className="bar-container">
                     <div className="three">
                       <p>3</p>
                      </div>
                  </div>
                  <div className="bar-container">
                     <div className="two">
                       <p>2</p>
                      </div>
                  </div>
                  <div className="bar-container">
                     <div className="one">
                       <p>1</p>
                      </div>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <div className="grid-flex">
          <div className="full">

            <Tabs defaultIndex={0}>
              <TabList>
                <Tab>Komentarze</Tab>
                <Tab>Informacje</Tab>
              </TabList>
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
              <TabPanel>
                <p>{this.props.restaurant.description}</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

}

export default Restaurant;
