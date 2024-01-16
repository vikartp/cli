const mongoose = require('mongoose');
// Map global promise- to get rid of warning, (might be required)
// mongoose.Promise = global.Promise;

// Connect to DB
const db = mongoose.connect('mongodb://localhost:27017/crud-cli');

// Import model
const Customer = require('./models/customer.cjs');

// Add Customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        // Close the MongoDB connection
        mongoose.connection.close();

    });
}

// Find Customer
const findCustomer = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        mongoose.connection.close();
    })
}

// Update Customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
        .then(result => {
            console.log('Customer Updated');
            console.info(result);
            mongoose.connection.close();
        })
}

// Remove Customer
const removeCustomer = _id => {
    Customer.deleteOne({ _id })
        .then(res => {
            console.log('Customer Deleted');
            console.info(res);
            mongoose.connection.close();
        })
}

// List Cutomer
const listCustomer = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} matches`);
            mongoose.connection.close();
        })
}

// Export All Methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}