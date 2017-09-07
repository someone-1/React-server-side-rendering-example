var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
import App from './App.js';
import Index from './views/Index.js';
import About from './views/About.js';

module.exports = (
    <Router history={browserHistory} >
        <Route path='/' component={App}>
            <IndexRoute component={Index} />
            <Route path='about' component={About} />
        </Route>
    </Router>
);