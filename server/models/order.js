var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
require('./customer.js');

var OrderSchema = new mongoose.Schema({
	product: String,
	quantity: Number,
	created_at: {type: Date, default: new Date()},
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
})

mongoose.model('Order', OrderSchema)