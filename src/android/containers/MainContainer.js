/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import isEmpty from 'lodash/isEmpty';
import Main from '../components/Main';
import { getLoginInfo } from '../../reducers/userReducer';
import userActions from '../../actions/userActions';
import noteActions from '../../actions/noteActions';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#FFF',
  },
});
const MainContainer = (props) => {
  const [initializing, setInitializing] = useState(false);
  const { receiveNotes, setSignedInUser } = props;

  useEffect(() => {
    function onAuthStateChanged(userAuth) {
      if (!isEmpty(userAuth)) {
        setSignedInUser(userAuth);
        receiveNotes(userAuth.uid);
      }

      if (initializing) setInitializing(false);
    }
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return unsubscribe;
  }, []);

  return (
    <View style={styles.app}>
      {initializing ? (
        <ActivityIndicator size="large" color={colors.secondary} />
      ) : (
        <Main {...props} />
      )}
    </View>
  );
};

MainContainer.propTypes = {
  loginInfo: PropTypes.object.isRequired,
  receiveNotes: PropTypes.func.isRequired,
  setSignedInUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const loginInfo = getLoginInfo(state);

  return {
    loginInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSignedInUser: (user) => {
      dispatch(userActions.setSignedInUser(user));
    },
    receiveNotes: (userId) => {
      dispatch(noteActions.receiveNotes(userId));
    },
  };
};
const memoMain = React.memo(MainContainer);
export default connect(mapStateToProps, mapDispatchToProps)(memoMain);
