"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HomePage = React.createClass({

	render: function() {
		return (
			// JSX can't use class="" because that's a reserved word... the compiled html will be class="" though
			<div className="jumbotron"> 
				<h1>Pluralsight Administration</h1>
				<p>React, React Router and Flux for ultra-responsive web apps.</p>
				<Link to="about" className="btn- btn-primary btn-lg">Learn More</Link>
			</div>
		);
	}
});

module.exports = HomePage;
