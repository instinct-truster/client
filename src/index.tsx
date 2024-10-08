import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';

const rootElement = document.querySelector('#root')!;

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <Main />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
