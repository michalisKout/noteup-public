import { combineReducers } from 'redux';
import { loginInfo } from './userReducer';
import { logs } from './logReducer';
import { notes, loadingNotes, currentNoteOptions } from './noteReducer';

export default combineReducers({
  loginInfo,
  logs,
  notes,
  loadingNotes,
  currentNoteOptions,
});
