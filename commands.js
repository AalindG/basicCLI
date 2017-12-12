#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const {
	addCustomer,
	listCustomer,
	findCustomer,
	updateCustomer,
	removeCustomer

} = require('./index');

// Set up questions using Inquirer
const questions = [
	{
		type: 'input',
		name: 'firstName',
		message: 'Enter First Name'
	},
	{
		type: 'input',
		name: 'lastName',
		message: 'Enter Last Name'
	},
	{
		type: 'input',
		name: 'phone',
		message: 'Enter Phone Number'
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter Your Email'
	}
]

// Define CLI
program
	.version('1.0.0')
	.description('Customer Management CLI')


// Add Command
// program
// 	.command('add <firstName> <lastName> <phone> <email>')
// 	.alias('a')
// 	.description('Add a new Customer')
// 	.action((firstName, lastName, phone, email) => {
// 		addCustomer({firstName, lastName, phone, email});
// 	});

// Add using 'Inquirer'
program
	.command('add')
	.alias('a')
	.description('Add a new Customer')
	.action(() => {
		prompt(questions)
			.then(answers => addCustomer(answers))
	})

// List customers
program
	.command('list')
	.alias('l')
	.description('List all customers')
	.action(() => listCustomer())

// Find a Customer
program
	.command('search <name>')
	.alias('f')
	.description('Find an existing customer')
	.action(name => {
		findCustomer(name);
	});

// Update a Customer
program
	.command('update <_id>')
	.alias('u')
	.description('Update an existing customer')
	.action((_id) => {
		prompt(questions)
			.then(answers => updateCustomer(_id, answers))
			.catch(err => {
				console.error(err);
			})
	})

// Remove a customer
program
	.command('remove <_id>')
	.alias('r')
	.description('Remove an existing customer')
	.action( _id => removeCustomer(_id));

program.parse(process.argv);





