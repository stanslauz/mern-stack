import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'state/api';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
  ,document.getElementById('root')
);
