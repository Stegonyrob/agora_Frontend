import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import stateStore from '../src/assets/stores/stateStore.js'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <Provider store={stateStore}>
     <App />
   </Provider>
 </React.StrictMode>
)
