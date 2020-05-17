import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import userActions from '../../actions/userActions';
import { getLoginInfo } from '../../reducers/userReducer';

const mapStateToProps = (state) => {
  const loginInfo = getLoginInfo(state);

  return {
    loginInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (email, password) => {
      dispatch(userActions.login(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));
