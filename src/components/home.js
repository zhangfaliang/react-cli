import React from 'react';
import { injectReducer } from '../utils/reducerUtils';
import { store } from '../index';
import reducer from '../reducers/home';
injectReducer(store, reducer);
export default ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);
