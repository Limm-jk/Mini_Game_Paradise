//대충 라우팅해주는 파일

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;