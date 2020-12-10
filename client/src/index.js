import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <h1>Hello, from Guru99 Tutorials!</h1>,
        document.getElementById('root')
    );
    
registerServiceWorker();
