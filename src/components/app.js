/*eslint-disable strict */ // disabling use strict because we need global vars in this file (jquery)

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;
