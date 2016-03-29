"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')}></DefaultRoute>
		<Route name="authors" handler={require('./components/authors/authors')}></Route>
		<Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthor')}></Route>
		<Route name="about" handler={require('./components/about/aboutPage')}></Route>
		<Redirect from="about-us" to="about" />

		<NotFoundRoute handler={require('./components/notFoundPage')}></NotFoundRoute>
	</Route>
);

module.exports = routes;
