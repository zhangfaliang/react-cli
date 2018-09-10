import { all } from 'redux-saga/effects';

import grandChild from './grandChild';
import homeSaga from './homeSaga';

function* rootSaga() {
  yield all([grandChild(), homeSaga()]);
}

export default rootSaga;
