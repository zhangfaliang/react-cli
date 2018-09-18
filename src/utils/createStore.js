import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { makeAllReducer } from './reducerUtils';
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();

let composeFn = compose;
export default (initialState = {}, initialRuducer = {}) => {
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    composeFn = composeWithDevTools;
  }
  const store = createStore(
    makeAllReducer(initialRuducer),
    initialState,
    composeFn(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  store.asyncReducers = {
    ...initialRuducer
  };
  return store;
};
