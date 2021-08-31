import {
  put, call, takeLatest
} from 'redux-saga/effects';
import Types from '../actions';
import api from '../api';
import Messages from '../messages'

const {
  loginUser,
  registerCustomer,
} = api;

function* LoginUser(action) {
  yield put({ type: Types.LOGIN_REQUEST });
  try {
    const res = yield call(loginUser, action.email, action.password);
    if (res.result) {
      yield put({ type: Types.LOGIN_SUCCESS, payload: res.user });
    } else {
      yield put({ type: Types.LOGIN_FAILURE, error: res.error });      
    }
  } catch (error) {
    yield put({ type: Types.LOGIN_FAILURE, error: Messages.NetWorkError });
    console.log(error);
  }
}

function* RegisterCustomer(action) {
  yield put({ type: Types.REGISTER_CUSTOMER_REQUEST });
  try {
    const res = yield call(registerCustomer, action.user);
    if (res.result) {
      yield put({ type: Types.REGISTER_CUSTOMER_SUCCESS, payload: res.user });
    } else {
      yield put({ type: Types.REGISTER_CUSTOMER_FAILURE, error: res.error });      
    }
  } catch (error) {
    yield put({ type: Types.REGISTER_CUSTOMER_FAILURE, error: Messages.NetWorkError });
    console.log(error);
  }
}


export default [
  takeLatest(Types.LOGIN_USER, LoginUser),
  takeLatest(Types.REGISTER_CUSTOMER, RegisterCustomer), 
];
