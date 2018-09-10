import { put, call, takeLatest } from 'redux-saga/effects';
import { grandChildActionType } from '../actions/grandChildAction';
import { testPost } from '../service';
function* getFetchData() {
  try {
    const data = yield testPost();
    debugger;
  } catch (error) {}
}

function* linstenGetGrandData(params) {
  yield takeLatest(grandChildActionType.GRAND_CHILD_LOAD_DATA, getFetchData);
}

export default linstenGetGrandData;
