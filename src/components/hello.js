import React from 'react';
import { injectReducer, injectSagas } from '../utils/reducerUtils';
import { store } from '../index';
import reducer from '../reducers/hello';
import grandChild from '../sagas/grandChild';

injectReducer(store, 'Hello', reducer);
injectSagas(store, grandChild);
export default ({ route }) => (
  <div>
    <h2>hello</h2>
  </div>
);
