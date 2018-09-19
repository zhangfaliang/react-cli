import React from 'react';
import { getAsyncInjectors } from '../utils/getInjectAsync';
import { store } from '../index';
import reducer from '../reducers/home';
import sagas from '../sagas/homeSaga';
getAsyncInjectors({ reducer, reducernNme: 'Home', sagas, store });
export default ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);
