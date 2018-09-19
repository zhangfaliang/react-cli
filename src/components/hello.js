import React from 'react';
import { getAsyncInjectors } from '../utils/getInjectAsync';
import { store } from '../index';
import reducer from '../reducers/hello';
import sagas from '../sagas/grandChild';
getAsyncInjectors({ reducer, reducernNme: 'Hello', sagas, store });
export default ({ route }) => (
  <div>
    <h2>hello</h2>
  </div>
);
