import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { throttle } from 'lodash';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/rootReducer';
import { loadState,saveState } from '../../utils/localStorage';

const persistedState = loadState();
const loggerMiddleware = createLogger();
const middleware = [
  loggerMiddleware,
  thunkMiddleware,
];

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

store.subscribe(throttle(() => {
  saveState({
    MyCart: store.getState().MyCart
  });
}, 1000));


export default store;