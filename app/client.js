import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import routes from './components/routes';
import {Router, browserHistory} from 'react-router';

// render(<routes />, document.getElementById('root'));

render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));