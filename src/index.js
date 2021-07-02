import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./store/"
import { BrowserRouter } from "react-router-dom";
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter as Router } from 'react-router-dom';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...options}>
          <Router>
            <App />
          </Router>
        </AlertProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider >,
  document.getElementById('root')
);

reportWebVitals();
