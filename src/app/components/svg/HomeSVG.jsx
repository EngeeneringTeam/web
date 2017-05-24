import React from 'react';
import {number} from 'prop-types';

const HomeSVG = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 20 19">
    <path d="M8,17 L8,11 L12,11 L12,17 L17,17 L17,9 L20,9 L10,0 L0,9 L3,9 L3,17 L8,17 Z" />
  </svg>
);

HomeSVG.propTypes = {
  height: number,
  width: number,
};

export default HomeSVG;
