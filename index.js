const mongoose = require('mongoose');

// Set and map global promises
mongoose.Promise = global.Promise;

// Connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
	useMongoClient: true
})

// Import Model
const Customer = require('./models/customerSchema');

// Add a customer
let addCustomer = (customer) =>{
	Customer.create(customer)
		.then(customer => {
			console.info('Added a new Customer');
			db.close();
		})
}

// List a customer
let listCustomer = () => {
	Customer.find({})
		.then(customers => {
			console.info(customers);
			console.info(`${customers.length} customer(s) found`);
			db.close();
		})
}

// Find a customer
let findCustomer = (name) => {
	// Making search case-insensitive
	const search =  new RegExp(name, 'i');
	Customer.find({$or:[{firstName: search}, {lastName: search} ]})
		.then(customer => {
			console.info(customer);
			console.info(`${customer.length} matche(s)`);
			db.close();
		})
}

// Update a Customer
let updateCustomer = (_id, customer) => {
	Customer.update({ _id }, customer)
		.then(customer => {
			console.info('Customer updated Successfully');
			db.close();
		})
}

// Remove a Customer
let removeCustomer = _id =>{
	Customer.remove({ _id })
		.then(customer => {
			console.info(`Customer removed successfully`);
			db.close();
		})
		.catch(err => {
			console.log('err',err);
		})
}


// Export all functions

module.exports = {
	addCustomer,
	listCustomer,
	findCustomer,
	updateCustomer,
	removeCustomer
}














