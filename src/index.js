// import App from './App';
import Seat from './Seat';
import React from 'react';
import { render } from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(<div><Seat /> </div>, document.getElementById('root'));
