import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

function loginRequest() {
  return { type: LOGIN_REQUEST };
}
function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, payload: data };
}
function loginFailure(error) {
  return { type: LOGIN_FAILURE, payload: error };
}

export function login(userData) {
  return function(dispatch) {
    dispatch(loginRequest());
    return axios
      .post("https://dev.aperiatechnologies.com/api/v1/login", userData)
      .then(response => {
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        dispatch(loginFailure(error.message));
      });
  };
}

const initialState = {
  loading: false,
  error: null,
  user: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
