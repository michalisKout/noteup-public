import { loginConstants, logoutConstants } from '../constants/userConstants';
import errorMessages from '../config/logsConfig';
import actionLog from './logActions';
import FirebaseAPI from '../service/api';
import { actionCreator } from './index';

export default {
  login,
  logout,
  setSignedInUser,
};

function login(username, password) {
  const { request, failure } = actionCreator(loginConstants);
  return (dispatch) => {
    dispatch(request());
    FirebaseAPI.signInUser(username, password)
      .then((data) => {
        dispatch(setSignedInUser(data.user));
      })
      .catch((error) => {
        const { GOOGLE_AUTH, GENERIC_AUTH_ERROR } = errorMessages;
        const isKnownIssue = Object.keys(GOOGLE_AUTH).includes(error.code);
        let message = GENERIC_AUTH_ERROR;
        if (isKnownIssue) {
          message = errorMessages.GOOGLE_AUTH[error.code];
        }

        dispatch(failure());
        dispatch(actionLog.errorLog(message));
      });
  };
}

function setSignedInUser(user) {
  return actionCreator(loginConstants).success(user);
}

function logout() {
  return (dispatch) => {
    FirebaseAPI.signOutUser().then(() => {
      dispatch(actionLog.clearLogs());
      dispatch(userLogout());
    });

    function userLogout() {
      return { type: logoutConstants.LOGOUT };
    }
  };
}
