import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

const configuredStore = () => {
  const enhance = composeWithDevTools({ realtime: true });

  return createStore(rootReducer, enhance(applyMiddleware(thunkMiddleware, loggerMiddleware)));
};
export default configuredStore;
