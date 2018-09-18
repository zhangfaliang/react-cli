import { combineReducers } from 'redux';
export const makeAllReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers
  });

export const injectReducer = (store, reducer) => {
  if (Object.hasOwnProperty.call(store.asyncReducer, reducer.name)) return;
  store.asyncReducer[reducer.name] = reducer;
  store.replaceReducer(makeAllReducer(store.asyncReducer));
};
