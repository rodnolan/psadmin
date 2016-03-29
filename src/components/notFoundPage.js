"use strict";

var React = require('react');
var Link = require('react-router').Link;


var NotFoundPage = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>nothing to see here... move along</p>
				<p><Link to="app">home</Link></p>
			</div>

		);
	}
});

module.exports = NotFoundPage;