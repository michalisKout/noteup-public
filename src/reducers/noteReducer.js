import {
  noteConstants,
  storeConstants,
  deleteConstants,
  updateNoteConstants,
  currentNoteOptionsConstants,
} from '../constants/noteConstants';
import { addEntityInList, removeEntityFromList, updateEntityInList } from '../utils/reducer-utils';
import { sortDescByDate } from '../utils/utils';
import normalizer from '../store/normalize';

export const notes = (state = { entities: {}, ids: [] }, action) => {
  switch (action.type) {
    case noteConstants.SUCCESS: {
      const noteList = action.payload;
      const sortedList = sortDescByDate(noteList);
      const res = normalizer.normalizedNotes({ noteList: sortedList });
      return { ...state, ...res };
    }

    case updateNoteConstants.SUCCESS: {
      const note = action.payload;

      return updateEntityInList(state, note);
    }

    case storeConstants.SUCCESS: {
      const note = action.payload;

      return addEntityInList(state, note);
    }

    case deleteConstants.SUCCESS: {
      const id = action.payload;
      return removeEntityFromList(state, id);
    }

    case noteConstants.FAILURE:
    case noteConstants.REQUEST:
    default:
      return state;
  }
};

const defaultOptions = { priority: false };
export const currentNoteOptions = (state = defaultOptions, action) => {
  switch (action.type) {
    case currentNoteOptionsConstants.SET_NOTE_PRIORITY: {
      const { priority } = action;
      return { ...state, priority };
    }
    case currentNoteOptionsConstants.CLEAR_NOTE_OPTIONS:
      return { ...state, ...defaultOptions };
    default:
      return state;
  }
};

export const getNotes = (state) => state.notes || {};
export const getNoteById = (state, id) => {
  return getNotes(state).entities[id] || {};
};

export const loadingNotes = (state = false, action) => {
  switch (action.type) {
    case noteConstants.REQUEST:
      return true;

    case noteConstants.SUCCESS:
      return false;

    default:
      return state;
  }
};

export const getNoteIdsByFiltering = (state, filterHandler) =>
  Object.values(state.notes.entities)
    .filter(filterHandler)
    .map((noteEntity) => noteEntity.id);
