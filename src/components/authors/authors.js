"use strict";

var React = require('react');
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
		return (<AuthorList authors={this.state.authors} />);
	}
});

module.exports = Authors;
