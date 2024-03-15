import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from "./assets/redux/store.js"
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider>
 </React.StrictMode>
)
