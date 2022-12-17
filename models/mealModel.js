const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealSchema = new Schema({
	meal_name: {
		type: String,
		default: '',
		require: true,
	},
	prepering_time: {
		type: Number,
		default: 0,
		require: true,
	},
	ingredients: {
		type: [String],
		default: [],
	},
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
