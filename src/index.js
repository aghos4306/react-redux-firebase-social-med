import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './store/reducers/rootReducers';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';

//const store = createStore(rootReducers);
const store = createStore(rootReducers, compose(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })), reduxFirestore(firebase)));

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider firebase={firebase} dispatch={store.dispatch} createFirestoreInstance={createFirestoreInstance}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
