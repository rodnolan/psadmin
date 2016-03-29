"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');


var ManageAuthorPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {
			author: {id: '', firstName: '', lastName: ''},
			errors: {}
		};
	},
	
	componentWillMount: function() {
		var authorId = this.props.params.id; // from the path '/author/:id' and the url http://localhost:9006/author/:bob-barker
		if (authorId) {
			this.setState({author: AuthorApi.getAuthorById(authorId)});
		}
	},

	setAuthorState: function(event) {
		// update state in parent component based on 
		// events that bubble up from child component
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState( {author: this.state.author} );
	},

	authorFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; // clear any previous errors
		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = "first name is too short";
			formIsValid = false;
		}
		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = "last name is too short";
			formIsValid = false;
		}
		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveAuthor: function(event) {
		// prevent the default click so the form does not actually submit
		event.preventDefault();

		if (!this.authorFormIsValid()) {
			return;
		}
		AuthorApi.saveAuthor(this.state.author);
		toastr.success('Author saved');
		this.transitionTo('authors');
	},

	render: function() {
		return (
			<div>
				<h1>Manage Author</h1>
				<AuthorForm 
					author={this.state.author}
					onChange={this.setAuthorState}
					onSave={this.saveAuthor}
					errors={this.state.errors}
				/>
			</div>

		);
	}
});

module.exports = ManageAuthorPage;
