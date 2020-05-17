import * as React from 'react';
import PropTypes from 'prop-types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import User from '../User/User';
import Profile from '../Profile/Profile';

const Drawer = createDrawerNavigator();

const ProfileDrawer = (props) => {
  const { receiveNotes, isFetchingNotes, loginInfo, userLogout, noteIds } = props;
  const userProps = { receiveNotes, loginInfo, noteIds, isFetchingNotes };
  const profileProps = { userLogout, loginInfo, noteIds, isFetchingNotes };
  return (
    <Drawer.Navigator
      initialRouteName="User"
      drawerContent={(props) => {
        return <Profile {...props} {...profileProps} />;
      }}
    >
      <Drawer.Screen name="User">{(props) => <User {...props} {...userProps} />}</Drawer.Screen>
    </Drawer.Navigator>
  );
};

ProfileDrawer.propTypes = {
  userLogout: PropTypes.func.isRequired,
  loginInfo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    pending: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  noteIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  storeNote: PropTypes.func.isRequired,
  receiveNotes: PropTypes.func.isRequired,
  isFetchingNotes: PropTypes.bool.isRequired,
};

export default ProfileDrawer;
