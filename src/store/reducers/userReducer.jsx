import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "store/actions/userActions";
import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_LOGOUT, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "store/actions/userActions";
import { FETCH_REGISTER_FAILURE, FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_UNREGISTER } from "store/actions/userActions";



const initialState = {
  loading: false,
  error: "",
  user: "",
  register: "",
  login: "",
};

export const userReducer = (state = initialState, { type, error, user, login, register }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: user, error:"" };

    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: error };

    case FETCH_LOGIN_REQUEST:
      return { ...state, loading: true };

    case FETCH_LOGIN_SUCCESS:
      return { ...state, loading: false, login: login, error:"" };

    case FETCH_LOGIN_FAILURE:
      return { ...state, loading: false, error: error };
    
    case FETCH_LOGIN_LOGOUT:
      return { ...state, loading: false, error: "", login:"" };

    case FETCH_REGISTER_REQUEST:
      return { ...state, loading: true };

    case FETCH_REGISTER_SUCCESS:
      return { ...state, loading: false, register: register, error:"" };

    case FETCH_REGISTER_FAILURE:
      return { ...state, loading: false, error: error };
    
    case FETCH_REGISTER_UNREGISTER:
      return { ...state, loading: false, error: "", register:"" };

    default:
      return state;
  }
};