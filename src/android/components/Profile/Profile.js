import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../shared/components/IconButton';
import createStyles from '../../../styles/base';
import profileStyles from './styles';
import NoteList from '../Notes/NoteList';

const styles = createStyles(profileStyles);

const Profile = (props) => {
  const {
    loginInfo: { user, loggedIn },
    userLogout,
    navigation,
    noteIds,
    isFetchingNotes,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>Logged In as: </Text>
        <Text style={styles.text}>{user.email}</Text>
        <NoteList
          noteIds={noteIds}
          navigation={navigation}
          isFetchingNotes={isFetchingNotes}
          isProfile
        />
      </View>
      {loggedIn && (
        <IconButton
          handlePress={userLogout}
          faIcon={faSignOutAlt}
          btnStyling={[styles.logOutBtn]}
          iconStyling={styles.logOutText}
          fontSize={32}
        />
      )}
    </View>
  );
};

Profile.propTypes = {
  userLogout: PropTypes.func.isRequired,
  loginInfo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    pending: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  noteIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetchingNotes: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Profile;
