import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router } from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import './i18n';

export const API_HOST = "http://ec2-23-20-72-10.compute-1.amazonaws.com"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
