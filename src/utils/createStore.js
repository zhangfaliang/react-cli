import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { makeAllReducer } from './reducerUtils';
import rootSaga from '../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
let composeFn = compose;
const middlewares = [sagaMiddleware];

export default (initialState, initialRuducer) => {
  if (process.env.NODE_ENV === 'development') {
    composeFn = composeWithDevTools;
  }

  const store = createStore(
    makeAllReducer(initialRuducer),
    initialState,
    composeFn(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  store.asyncReducer = {
    ...initialRuducer
  };
  return store;
};
