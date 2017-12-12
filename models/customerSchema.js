const mongoose = require('mongoose');

// Define Customer Schema

const customerSchema = mongoose.Schema({
	firstName: { type: String },
	lastName : { type: String },
	phone : { type: String },
	email : {
		type: String
	}
})


// Define and exportts schema
module.exports = mongoose.model('Customer', customerSchema);