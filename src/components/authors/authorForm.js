"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
	
	propTypes: {
		author: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired
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
				/>
				
				<TextInput
					name="lastName"
					label="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange} 
					placeholder="Last Name"
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
