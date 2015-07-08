var React = require('react');
var Settings = require('../../settings');

var Markers = React.createClass({
    render: function () {
        return (
            <ul className="markers-list">
                <li><span className={'box ' + Settings.marker.classNames.testPeriod}></span> Test Period</li>
                <li><span className={'box ' + Settings.marker.classNames.absence}></span> Absence</li>
                <li><span className={'box ' + Settings.marker.classNames.selfEducation}></span> Selfeducation</li>
            </ul>
        );
    }
});

module.exports = Markers;