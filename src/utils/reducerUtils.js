import { combineReducers } from 'redux';
import conformsTo from 'lodash/conformsTo';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import invariant from 'invariant';
import warning from 'warning';

/**
 * Validate the shape of redux store
 */
export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    asyncReducers: isObject
  };

  invariant(
    conformsTo(store, shape),
    '(app/utils...) asyncInjectors: Expected a valid redux store'
  );
}
export const makeAllReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers
  });

export const injectReducer = (store, name, reducer) => {
  //checkStore(store)
  invariant(
    isString(name) && !isEmpty(name) && isFunction(reducer),
    '(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function'
  );
  if (Object.hasOwnProperty.call(store.asyncReducer, name)) return;
  store.asyncReducer[name] = reducer;
  store.replaceReducer(makeAllReducer(store.asyncReducer));
};

export function injectSagas(store, sagas) {
  invariant(
    Array.isArray(sagas),
    '(app/utils...) injectAsyncSagas: Expected `sagas` to be an array of generator functions'
  );

  warning(
    !isEmpty(sagas),
    '(app/utils...) injectAsyncSagas: Received an empty `sagas` array'
  );

  sagas.map(store.runSaga);
}
