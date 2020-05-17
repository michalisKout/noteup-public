import { loginConstants, logoutConstants } from '../constants/userConstants';

export const loginInfo = (
  state = { loggedIn: false, pending: false, user: {}, error: {} },
  action,
) => {
  switch (action.type) {
    case loginConstants.REQUEST:
      return { ...state, pending: true };

    case loginConstants.SUCCESS: {
      const user = action.payload;
      const loginInfo = {
        loggedIn: true,
        pending: false,
      };
      return { ...state, user, ...loginInfo };
    }
    case loginConstants.FAILURE:
    case logoutConstants.LOGOUT:
      return { ...state, loggedIn: false, pending: false };

    default:
      return state;
  }
};

export const getLoginInfo = (state) => state.loginInfo || { loggedIn: false, pending: false };
