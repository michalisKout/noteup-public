import logConstants from '../constants/logConstants';

const defaultLogs = { type: '', messages: [] };

export const logs = (state = defaultLogs, action) => {
  const { type } = action;
  switch (type) {
    case logConstants.SUCCESS: {
      return updateLogState(state, action.message, 'successLog');
    }

    case logConstants.WARNING: {
      return updateLogState(state, action.message, 'warningLog');
    }

    case logConstants.ERROR: {
      return updateLogState(state, action.message, 'errorLog');
    }
    case logConstants.CLEAR:
      return { ...state, ...defaultLogs };

    default:
      return state;
  }
};

function updateLogState(prevState, message, type) {
  if (prevState.messages.includes(message)) return prevState;
  return { ...prevState, messages: [...prevState.messages, message], type };
}

export const getLogs = (state) => state.logs || defaultLogs;
