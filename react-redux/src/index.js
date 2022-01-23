import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { forbiddenWordsMiddleware } from './redux/middleware';
import sagaWatcher from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleware,
    saga
    
    )
));

saga.run(sagaWatcher)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)