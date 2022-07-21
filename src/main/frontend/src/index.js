import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';

// const inputs = [{
//   name: "username",
//   placeholder: "username",
//   type:"text"
// },{
//   name:"password",
//   placeholder:"password",
//   type:"password"
// },{
//   type:"submit",
//   value:"Submit",
//   className:"btn"
// }]
// const props = {
//   name: 'loginForm',
//   method: 'POST',
//   action: '/perform_login',
//   inputs: inputs
// }
// const params = new URLSearchParams(window.location.search)
// ReactDOM.render(
//   <Form {...props} error={params.get('error')} />, document.getElementById('container')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();