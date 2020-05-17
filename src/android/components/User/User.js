import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { faPlus, faUser, faSync } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../shared/components/IconButton';

import createStyles, { colors } from '../../../styles/base';
import userStyles from './styles';
import Title from '../../../shared/components/PageTitle/PageTitle';
import LogMessages from '../../../shared/components/Logs/LogMessages';
import NoteTabs from '../Navigation/NoteTabs';

const styles = createStyles(userStyles);

const User = ({ receiveNotesThrottled, navigation, isFetchingNotes }) => {
  return (
    <View style={[styles.wrapper, styles.userWrapper]}>
      <View style={styles.titleWrapper}>
        <IconButton handlePress={receiveNotesThrottled} faIcon={faSync} fontSize={25} />
        <Title title="NoteUp" />
        <IconButton
          handlePress={() => {
            navigation.openDrawer();
          }}
          faIcon={faUser}
          fontSize={25}
        />
      </View>

      <View style={styles.containerInputWithIcon}>
        <IconButton
          faIcon={faPlus}
          handlePress={() => {
            navigation.navigate({ name: 'NotePopupPage', params: { id: '' } });
          }}
          btnStyling={[styles.addNoteBtn]}
          iconStyling={styles.icon}
        />
      </View>
      {/* <BannerPromo /> */}
      <LogMessages />

      {isFetchingNotes ? (
        <ActivityIndicator size="large" color={colors.secondary} style={styles.indicator} />
      ) : (
        <NoteTabs />
      )}
    </View>
  );
};

User.propTypes = {
  receiveNotesThrottled: PropTypes.func.isRequired,
  loginInfo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    pending: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  isFetchingNotes: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default User;
