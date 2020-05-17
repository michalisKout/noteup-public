import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotePopup from '../components/NotePopup/NotePopup';
import EN_MESSAGES from '../../config/en_messages';
import { getNoteById } from '../../reducers/noteReducer';
import { getLoginInfo } from '../../reducers/userReducer';
import noteActions from '../../actions/noteActions';
import logActions from '../../actions/logActions';

const NotePopupContainer = ({
  loginInfo,
  note,
  storeNote,
  updateNote,
  warningLog,
  clearLogs,
  navigation,
  currentNoteOptions,
  clearNoteOptions,
}) => {
  const { description, title, id } = note;
  const [newDescription, setNewDescription] = useState(description || '');
  const [newTitle, setNewTitle] = useState(title || '');

  const shouldUpdate =
    (description !== newDescription || title !== newTitle) && (newDescription || newTitle);
  const shouldShowOptions = id !== undefined && id !== null;
  const submitNoteText = id
    ? EN_MESSAGES.POP_UP.BUTTONS.UPDATE_NOTE
    : EN_MESSAGES.POP_UP.BUTTONS.TAKE_NOTE;

  function handleWarningOnEdit() {
    if (!shouldUpdate) {
      clearLogs();
    } else {
      warningLog(EN_MESSAGES.SAVE_NOTES.WARNING);
    }
  }

  function handleSubmitNote() {
    const newNote = {
      title: newTitle,
      description: newDescription,
      priority: currentNoteOptions.priority,
    };
    if (id && shouldUpdate) {
      updateNote(loginInfo.user.uid, id, newNote);
    } else if (newTitle || newDescription) {
      storeNote(loginInfo.user.uid, newNote);
      setNewDescription('');
      setNewTitle('');
      clearNoteOptions();
    }
  }

  return (
    <NotePopup
      handleWarningOnEdit={handleWarningOnEdit}
      handleSubmitNote={handleSubmitNote}
      setNewTitle={setNewTitle}
      setNewDescription={setNewDescription}
      newTitle={newTitle}
      newDescription={newDescription}
      shouldUpdate={shouldUpdate}
      submitNoteText={submitNoteText}
      navigation={navigation}
      shouldShowOptions={shouldShowOptions}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const noteId = ownProps.route.params && ownProps.route.params.id;
  const { currentNoteOptions } = state;
  const note = getNoteById(state, noteId);
  const loginInfo = getLoginInfo(state);

  return {
    note,
    noteId,
    loginInfo,
    currentNoteOptions,
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
    warningLog: (message) => {
      dispatch(logActions.warningLog(message));
    },
    clearLogs: () => {
      dispatch(logActions.clearLogs);
    },
    storeNote: (userId, note) => {
      dispatch(noteActions.storeNote(userId, note));
    },
    clearNoteOptions: () => {
      dispatch(noteActions.clearNoteOptions());
    },
  };
};

NotePopupContainer.defaultProps = {
  note: {
    id: '',
    description: '',
    title: '',
  },
  storeNote: () => true,
  updateNote: () => true,
  warningLog: () => true,
  clearLogs: () => true,
};

NotePopupContainer.propTypes = {
  storeNote: PropTypes.func,
  updateNote: PropTypes.func,
  clearLogs: PropTypes.func,
  warningLog: PropTypes.func,
  loginInfo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    pending: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  note: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
  navigation: PropTypes.object.isRequired,
  currentNoteOptions: PropTypes.shape({
    priority: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(NotePopupContainer));
