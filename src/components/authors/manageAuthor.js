"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
	getInitialState: function() {
		return {
			author: {id: '', firstName: '', lastName: ''}
		};
	},
	
	setAuthorState: function(event) {
		// update state in parent component based on 
		// events that bubble up from child component
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState( {author: this.state.author} );
	},

	saveAuthor: function(event) {
		// prevent the default click so the form does not actually submit
		event.preventDefault();
		AuthorApi.saveAuthor(this.state.author);

	},

	render: function() {
		return (
			<div>
				<h1>Manage Author</h1>
				<AuthorForm 
					author={this.state.author}
					onChange={this.setAuthorState}
					onSave={this.saveAuthor}
				/>
			</div>

		);
	}
});

module.exports = ManageAuthorPage;
