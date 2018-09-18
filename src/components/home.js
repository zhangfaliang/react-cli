import React from 'react';
import { injectReducer } from '../utils/reducerUtils';
import { store } from '../Root';
import reducer, { key } from '../reducers/home';
injectReducer(store, { key, reducer });
export default ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);
