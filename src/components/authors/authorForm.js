"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
	
	propTypes: {
		author: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSave: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	
	render: function() {
		return (
			<form>
				<TextInput
					name="firstName"
					label="First Name"
					value={this.props.author.firstName}
					onChange={this.props.onChange} 
					placeholder="First Name"
					error={this.props.errors.firstName}
				/>
				
				<TextInput
					name="lastName"
					label="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange} 
					placeholder="Last Name"
					error={this.props.errors.lastName}
				/>

				<input type="submit"
					value="Save"
					className="btn btn-default"
					onClick={this.props.onSave}
				/>
			</form>

		);
	}
});

module.exports = AuthorForm;
