import { put, call, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  useSagaAndUseConnectedReactRouter,
  homeActionTypes
} from '../actions/homeAction';

function* pushPath(action) {
  //const action = yield take(useSagaAndUseConnectedReactRouter)
  try {
    yield put(push(action.path));
  } catch (error) {
    console.log(error);
  }
}

function* listenPushPath() {
  yield takeLatest(
    homeActionTypes.USE_SAGA_AND_USE_CONNECTED_REACT_ROUTER,
    pushPath
  );
}

export default listenPushPath;
