var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	description: String,
	created_at: {type: Date, default: new Date()},
	// _order: {type: Schema.Types.ObjectId, ref: 'Order'},
})

mongoose.model('Product', ProductSchema)