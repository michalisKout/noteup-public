import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Note from '../components/Notes/Note';
import { getNoteById } from '../../reducers/noteReducer';
import { getLoginInfo } from '../../reducers/userReducer';
import noteActions from '../../actions/noteActions';
import ArchivedNote from '../components/Notes/ArchivedNote';

const NoteContainer = (props) => {
  const { isProfile, deleteNote } = props;
  const handleNoteDeletion = (userId, noteId) =>
    Alert.alert(
      'Note deletion is permanent!',
      'Are you sure your want to delete it?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Delete Note', onPress: () => deleteNote(userId, noteId) },
      ],
      { cancelable: false },
    );

  return isProfile ? (
    <ArchivedNote {...props} handleNoteDeletion={handleNoteDeletion} />
  ) : (
    <Note {...props} />
  );
};

const mapStateToProps = (state, ownProps) => {
  const noteId = ownProps.id;
  const { navigation, isProfile } = ownProps;
  const note = getNoteById(state, noteId);
  const loginInfo = getLoginInfo(state);
  return {
    note,
    noteId,
    loginInfo,
    navigation,
    isProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (userId, noteId) => {
      dispatch(noteActions.deleteNote(userId, noteId));
    },
    updateNote: (userId, noteId, updateNote) => {
      dispatch(noteActions.updateNote(userId, noteId, updateNote));
    },
  };
};

NoteContainer.defaultProps = {
  isProfile: false,
};

NoteContainer.propTypes = {
  isProfile: PropTypes.bool,
  deleteNote: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
