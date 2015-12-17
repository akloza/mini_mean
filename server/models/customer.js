var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
require('./order.js');

var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: new Date()},
	orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
})

mongoose.model('Customer', CustomerSchema)