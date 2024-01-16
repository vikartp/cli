const mongoose = require('mongoose');
// Customer Schema
const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String }
})

/**
 * Create a Mongoose model based on the Customer schema
 * First argument is going to be collection name(lowercase) and one 's' appended.
 * Here collection will be 'customers'
 */
const customer = mongoose.model('Customer', customerSchema);

module.exports = customer;