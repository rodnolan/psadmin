"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

var AuthorApi = require('../../api/AuthorApi');
var AuthorList = require('./authorList');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ authors: AuthorApi.getAllAuthors() });
		}
	},

	render: function() {
		return (
			<div>
			<Link to="addAuthor" className="btn btn-default">Add Author</Link>
			<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = Authors;
