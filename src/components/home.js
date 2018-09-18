import React from 'react';
import { injectReducer, injectSagas } from '../utils/reducerUtils';
import { store } from '../index';
import reducer from '../reducers/home';
import homeSaga from '../sagas/homeSaga';
injectReducer(store, 'Home', reducer);
injectSagas(store, homeSaga);
export default ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);
