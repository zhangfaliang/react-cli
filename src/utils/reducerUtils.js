import { combineReducers } from 'redux';
export const makeAllReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers
  });

export const injectReducer = (store, { reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, reducer.name)) return;

  store.asyncReducers[reducer.name] = reducer;
  store.replaceReducer(makeAllReducer(store.asyncReducers));
};
