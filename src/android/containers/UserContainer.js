/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash/debounce';
import noteActions from '../../actions/noteActions';
import { getNotes } from '../../reducers/noteReducer';
import { getLoginInfo } from '../../reducers/userReducer';
import userActions from '../../actions/userActions';
import ProfileDrawer from '../components/Navigation/ProfileDrawer';

const SYNC_NOTES_DELAY = 30000;

const UserContainer = (props) => {
  const receiveNotesThrottled = throttle(
    () => props.receiveNotes(props.loginInfo.user.uid),
    SYNC_NOTES_DELAY,
    {
      leading: true,
      trailing: false,
    },
  );
  return <ProfileDrawer {...props} receiveNotesThrottled={receiveNotesThrottled} />;
};

const mapStateToProps = (state, ownProps) => {
  const noteIds = getNotes(state).ids;
  const loginInfo = getLoginInfo(state);
  const isFetchingNotes = state.loadingNotes;
  const { navigation } = ownProps;

  return {
    noteIds,
    loginInfo,
    navigation,
    isFetchingNotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeNote: (userId, note) => {
      dispatch(noteActions.storeNote(userId, note));
    },
    receiveNotes: (userId) => {
      dispatch(noteActions.receiveNotes(userId));
    },
    userLogout: () => {
      dispatch(userActions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(UserContainer));
