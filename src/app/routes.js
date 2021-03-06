var React = require('react');
var Router = require('react-router');

var APP = require('./components/app/app').APP;
var Home = require('./components/home/home');
var Login = require('./components/auth/login');
var Logout = require('./components/auth/logout');
var Workload = require('./components/workload/employees-grid');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

/**
 * Application routing
 * @see For more info about routing visit {@link https://github.com/rackt/react-router}
 * @type {XML}
 */
var routes = (
    <Route name="app" path="/" handler={APP}>
        <DefaultRoute handler={Home}/>
        <Route name="login" handler={Login}/>
        <Route name="logout" handler={Logout}/>
        <Route name="workload" handler={Workload}>
            <Route path="/workload/filter/:type/:value" name="workload-filter" handler={Workload}/>
            <DefaultRoute handler={Workload}/>
        </Route>
    </Route>
);

module.exports = routes;