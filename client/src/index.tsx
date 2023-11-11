import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM is a package for REact creating methods for working with Document Object Model. Responsible for rendering React components.
// The "root" allows display of React components. Can destroy react tree with root.unmount()
const root = ReactDOM.createRoot(

  // querySelector() can also be used to select the first matching element of a group of elements, which can be helpful in certain situations. 
  // getElementById() is useful when you need to select an element using its ID attribute. 
  // Since IDs must be unique within a page, getElementById() will always return the correct element
  document.getElementById('root') as HTMLElement 
);

// This is how we render elements of our React app. Elements are the smallest building blocks of React apps. 
// We like to organize our code into components, which can then in turn be composed of elements. Each component has a lifecycle and in a given
// phase, can execute code at particular point of existence
root.render(

  //StrictMode is a tool for more robust development by identifying mistakes: unsafe lifecycles, unexpected side effects w/ rendering
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
