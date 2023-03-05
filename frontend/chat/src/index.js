import React from 'react';
import {createRoot} from 'react-dom/client'
import App from "./App";
import './override.less'

createRoot(document.querySelector('#root')).render(<App/>);

