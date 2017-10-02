import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import {selectSubreddit, fetchPosts } from './actions'
import rootReducer from './reducers'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(selectSubreddit('outdoors'))
store.dispatch(fetchPosts('outdoors')).then(() => console.log(store.getState()))


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
