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

export const injectReducer = (store, reducernNme, reducer) => {
  invariant(
    isString(reducernNme) && !isEmpty(reducernNme) && isFunction(reducer),
    '(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function'
  );

  if (Object.hasOwnProperty.call(store.asyncReducers, reducernNme)) return;
  store.asyncReducers[reducernNme] = reducer;
  store.replaceReducer(makeAllReducer(store.asyncReducers));
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

export const getAsyncInjectors = ({ reducer, reducernNme, sagas, store }) => {
  checkStore(store);
  if (!isEmpty(reducer)) injectReducer(store, reducernNme, reducer);
  if (!isEmpty(sagas)) injectSagas(store, sagas);
};
