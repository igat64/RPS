var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var AuthAction = require('../../actions/auth-actions');
var AuthStore = require('../../stores/app-auth-store');
var Header = require('../header/header');

var Template = require('./app-template');

/**
 * Main template with all application
 * @class
 * @type {*|Function}
 */
var APP = React.createClass({
    /**
     * Get user's authorization state
     * @memberOf APP
     * @return {object}
     */
    getInitialState: function () {
        return AuthStore.getState();
    },
    /**
     * @memberOf APP
     */
    componentWillMount: function () {
        AuthStore.addChangeListener(this.setStateOnAuth);
    },
    /**
     * @memberOf APP
     */
    setStateOnAuth: function () {
        this.setState(AuthStore.getState());
    },
    /**
     * @memberOf APP
     * @return {XML}
     */
    render: function () {
        return (
            <Template>
                <Header loggedIn={this.state.loggedIn}/>

                <div className="container">
                    <RouteHandler/>
                </div>
            </Template>
        );
    }
});

exports.APP = APP;