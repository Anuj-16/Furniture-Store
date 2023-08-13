import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import {store} from "./redux/store"
import AuthContentProvider from './AuthContent/AuthContentProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContentProvider>
<Provider store={store}>
<BrowserRouter>  <App /></BrowserRouter>
</Provider>
</AuthContentProvider>
  
 
=======

import { ChakraProvider, theme } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,
// >>>>>>> 34b6c7e21604cb1ae40eef1064aaf343a6c1297e
>>>>>>> d9758b5ca688b41bc7b9f03750093e70aa2ac6f1
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
