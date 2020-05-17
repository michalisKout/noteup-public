import {
  noteConstants,
  storeConstants,
  deleteConstants,
  updateNoteConstants,
  currentNoteOptionsConstants,
} from '../constants/noteConstants';
import actionLog from './logActions';
import FirebaseAPI from '../service/api';
import { actionCreator } from './index';

export default {
  storeNote,
  receiveNotes,
  deleteNote,
  updateNote,
  setNotePriority,
  clearNoteOptions,
};

function storeNote(userId, note) {
  const { request, success, failure } = actionCreator(storeConstants);
  return (dispatch) => {
    const userNotes = FirebaseAPI.getNotesCollection(userId);
    const newNote = {
      ...note,
      date: Date.now(),
    };
    dispatch(request());
    userNotes
      .add(newNote)
      .then((data) => {
        dispatch(success({ ...note, id: data.id }));
        dispatch(actionLog.clearLogs());
        dispatch(actionLog.successLog('Your note has been saved!'));
      })
      .catch(() => {
        dispatch(failure());
        dispatch(actionLog.errorLog('Saving your note failed, please try again!'));
      });
  };
}

function updateNote(userId, noteId, updatedNote) {
  const { request, success, failure } = actionCreator(updateNoteConstants);
  return (dispatch) => {
    const userNotes = FirebaseAPI.getNotesCollection(userId);
    const note = {
      ...updatedNote,
      date: Date.now(),
    };
    dispatch(request());
    userNotes
      .doc(noteId)
      .update(note)
      .then(() => {
        dispatch(success({ ...note, id: noteId }));
        dispatch(actionLog.clearLogs());
        dispatch(actionLog.successLog('Your note has been updated!'));
      })
      .catch(() => {
        dispatch(failure());
        dispatch(actionLog.errorLog('Updating your note failed, please try again!'));
      });
  };
}

function deleteNote(userId, noteId) {
  const { request, success, failure } = actionCreator(deleteConstants);
  return (dispatch) => {
    const userNotes = FirebaseAPI.getNotesCollection(userId);
    dispatch(request());
    userNotes
      .doc(noteId)
      .delete()
      .then(() => {
        dispatch(success(noteId));
        dispatch(actionLog.clearLogs());
        dispatch(actionLog.successLog('Note successfully deleted!'));
      })
      .catch(() => {
        dispatch(failure());
        dispatch(actionLog.errorLog('Oops! Cannot delete note...'));
      });
  };
}

function receiveNotes(userId) {
  const { request, success, failure } = actionCreator(noteConstants);
  return (dispatch) => {
    const userNotes = FirebaseAPI.getNotesCollection(userId);
    dispatch(request());
    userNotes.get().then(
      (querySnapshot) => {
        const noteList = [];
        querySnapshot.forEach((doc) => {
          const { description, date, title, archived, priority } = doc.data();
          noteList.push({
            id: doc.id,
            description,
            date,
            title,
            archived,
            priority,
          });
        });

        dispatch(success(noteList));
      },
      (error) => {
        dispatch(failure());
        dispatch(actionLog.errorLog(error.message));
      },
    );
  };
}

function setNotePriority(priority) {
  return {
    type: currentNoteOptionsConstants.SET_NOTE_PRIORITY,
    priority,
  };
}

function clearNoteOptions() {
  return {
    type: currentNoteOptionsConstants.CLEAR_NOTE_OPTIONS,
  };
}
