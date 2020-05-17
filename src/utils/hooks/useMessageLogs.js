/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import actionLog from '../../actions/logActions';

export const useMessageLogs = () => {
  const dispatch = useDispatch();
  const logMessages = useSelector((state) => state.logs.messages);
  const logType = useSelector((state) => state.logs.type);

  const clearMessages = () => dispatch(actionLog.clearLogs());

  return {
    logType,
    logMessages,
    clearMessages,
  };
};
