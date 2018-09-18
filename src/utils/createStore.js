import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sages/rootSaga';
import { makeAllReducer } from './reducerUtils';

const sagaMiddleware = createSagaMiddleware();

export default (initialState = {}, initialRuducer = {}) => {
  const middlewares = [sagaMiddleware];
  const enhancers = [];
  if (process.env.NODE_ENV === 'develpment') {
    const devtoolsExtension = window.devtoolsExtension;

    if (typeof devtoolsExtension === 'function') {
      enhancers.push(devtoolsExtension);
    }
  }
  const store = createstore(
    makeAllReducer(initialRuducer),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );
  sagaMiddleware.run(rootSaga);
  store.asyncReducers = {
    ...initialRuducer
  };
  return store;
};
