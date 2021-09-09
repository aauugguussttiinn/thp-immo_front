
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUsersSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error,
  };
};


export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";
export const FETCH_LOGIN_LOGOUT = "FETCH_LOGIN_LOGOUT";

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};
export const fetchLoginSuccess = (login) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    login,
  };
};
export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    error,
  };
};
export const fetchLoginLogout = () => {
  return {
    type: FETCH_LOGIN_LOGOUT
  };
};


export const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
export const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
export const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";
export const FETCH_REGISTER_UNREGISTER = "FETCH_REGISTER_UNREGISTER";

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};
export const fetchRegisterSuccess = (register) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    register,
  };
};
export const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    error,
  };
};
export const fetchRegisterUnregister = () => {
  return {
    type: FETCH_REGISTER_UNREGISTER
  };
};