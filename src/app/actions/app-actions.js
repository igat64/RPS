/**
 Application action creator.
 * More info about Actions and Action Creators visit
 * https://facebook.github.io/flux/docs/actions-and-the-dispatcher.html#actions-and-action-creators
 * @module
 */


var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var EmployeeService = require('../services/employee');
var MarkersService = require('../services/markers');



 /**
 * @class
 */
var AppActions = {

    /**
     * Requests list of children from the server by user id.
     * @return {object} Promise
     */
    loadEmployees: function () {
        EmployeeService.fetch().then(function (employees) {
            var payload = {
                actionType: AppConstants.RECEIVE_EMPLOYEES,
                data: {
                    employees: employees
                }
            };
            AppDispatcher.handleViewAction(payload);
        });
    },

    /**
     * @param {string} type
     * @param {string} value
     */
    setEmployeeFilter: function (type, value) {
        var payload = {
            actionType: AppConstants.SET_FILTER,
            data: {
                type: type,
                value: value
            }
        };
        AppDispatcher.handleViewAction(payload);
    }
};

module.exports = AppActions;