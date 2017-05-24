import React from 'react';
import {number} from 'prop-types';

const SearchSVG = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 70 70">
    <path d="M51.957,49.129l-8.713-8.713c1.75-2.337,2.799-5.229,2.799-8.373c0-7.732-6.268-14-14-14s-14,6.268-14,14s6.268,14,14,14  c3.144,0,6.036-1.049,8.373-2.799l8.713,8.713L51.957,49.129z M22.043,32.043c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10  c0,5.514-4.486,10-10,10C26.529,42.043,22.043,37.557,22.043,32.043z"/>
  </svg>
);

SearchSVG.propTypes = {
  height: number,
  width: number,
};

export default SearchSVG;
