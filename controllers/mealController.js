const mongoose = require('mongoose');

const Meal = require('../models/mealModel');

exports.GetAllMeals = async (req, res) => {
	const allMeals = await Meal.find();

	if (!allMeals) {
		res.json({
			message: 'No meals!',
		});
	}

	res.json({
		allMeals,
	});
};

exports.PostNewMeal = async (req, res) => {
	const newMeal = {
		meal_name: req.body.meal_name,
		prepering_time: req.body.prepering_time,
		ingredients: req.body.ingredients,
	};

	await Meal.create(newMeal);

	res.json({
		newMeal,
	});
};

exports.PutUpdateMeal = (req, res) => {
	res.json({
		message: 'Update',
	});
};

exports.DeleteMeal = (req, res) => {
	res.json({
		message: `Delete Meal ${req.params._id}`,
	});
};

exports.GetMeal = async (req, res) => {
	const mealId = req.params._id;

	if (!mealId) res.json({ message: 'Please add ID' });

	const meal = Meal.findById(mealId);

	if (!meal) res.json({ message: `There is no meal with id ${mealId}` });

	console.log(meal);

	res.json({
		meal,
	});
};
