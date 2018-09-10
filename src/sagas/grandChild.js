import { put, call, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { grandChildActionType } from '../actions/grandChildAction';
import { testPost, getUnionLogin } from '../service';

function* getFetchData() {
  try {
    yield put(push('/'));
    const data = yield testPost();
    const getData = yield getUnionLogin();
  } catch (error) {}
}

function* linstenGetGrandData(params) {
  yield takeLatest(grandChildActionType.GRAND_CHILD_LOAD_DATA, getFetchData);
}

export default linstenGetGrandData;
