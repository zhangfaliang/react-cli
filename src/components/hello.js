import React from 'react';
import { injectReducer } from '../utils/reducerUtils';
import { store } from '../index';
import reducer from '../reducers/hello';
injectReducer(store, reducer);
export default ({ route }) => (
  <div>
    <h2>hello</h2>
  </div>
);
