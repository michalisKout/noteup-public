import PropTypes from 'prop-types';
import logConstants from '../constants/logConstants';

export default actionLogCreator(logConstants);

function actionLogCreator(constantType) {
  return {
    successLog(message = []) {
      return {
        type: constantType.SUCCESS,
        message,
      };
    },
    errorLog(message) {
      return {
        type: constantType.ERROR,
        message,
      };
    },
    warningLog(message) {
      return {
        type: constantType.WARNING,
        message,
      };
    },
    clearLogs() {
      return {
        type: constantType.CLEAR,
      };
    },
  };
}

actionLogCreator.propTypes = {
  messages: PropTypes.string,
  logType: PropTypes.string.isRequired,
};
