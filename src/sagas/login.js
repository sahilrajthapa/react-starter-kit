import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { loginUser } from '../services/login';
import loginActions, { Types } from '../actions/login';

export function* loginRequest(action) {
  try {
    const { payload } = action;
    const response = yield call(loginUser, payload);
    localStorage.setItem('token', response.data.token);
    yield put(loginActions.loginSuccess({ data: response.data }));
    yield put(push('/'));
  } catch (error) {
    yield put(loginActions.loginFailure());
  }
}

function* logoutRequest() {
  try {
    localStorage.clear();
    yield put(loginActions.logoutSuccess());
    yield put(push('/login'));
  } catch (error) {
    yield put(loginActions.logoutFailure());
  }
}

function* loginWatcher() {
  yield takeLatest(Types.LOGIN_REQUEST, loginRequest);
  yield takeLatest(Types.LOGOUT_REQUEST, logoutRequest);
}

export default loginWatcher;
