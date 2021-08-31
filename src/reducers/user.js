import { createReducer } from 'reduxsauce';
import Types from '../actions';
import { Status } from '../constants';

export const initialState = {

  currentUser: null,

  loginUserStatus: Status.NONE,
  checkEmailStatus: Status.NONE,
  registerCustomerStatus: Status.NONE,
};

/////////////////////////////////////////////////////
/////////////////////// Login ///////////////////////
/////////////////////////////////////////////////////
const loginUserRequest = (state) => ({
  ...state,
  loginUserStatus: Status.REQUEST,
});

const loginUserSuccess = (state, action) => ({
  ...state,
  currentUser: action.payload,
  loginUserStatus: Status.SUCCESS,
});

const loginUserFailure = (state, action) => ({
  ...state,
  errorMessage: action.error,
 loginUserStatus: Status.FAILURE,
});

/////////////////////////////////////////////////////
//////////////// Register Customer //////////////////
/////////////////////////////////////////////////////
const registerCustomerRequest = (state) => ({
  ...state,
  registerCustomerStatus: Status.REQUEST,
});

const registerCustomerSuccess = (state, action) => ({
  ...state,
  currentUser: action.payload,
  registerCustomerStatus: Status.SUCCESS,
});

const registerCustomerFailure = (state, action) => ({
  ...state,
  errorMessage: action.error,
  registerCustomerStatus: Status.FAILURE,
});


const actionHandlers = {
  [Types.LOGIN_REQUEST]: loginUserRequest,
  [Types.LOGIN_SUCCESS]: loginUserSuccess,
  [Types.LOGIN_FAILURE]: loginUserFailure,

  [Types.REGISTER_CUSTOMER_REQUEST]: registerCustomerRequest,
  [Types.REGISTER_CUSTOMER_SUCCESS]: registerCustomerSuccess,
  [Types.REGISTER_CUSTOMER_FAILURE]: registerCustomerFailure,
};

export default createReducer(initialState, actionHandlers);
