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

exports.PutUpdateMeal = async (req, res) => {
	const mealId = req.params._id;

	if (!mealId) res.json({ message: 'Please send ID to update meal' });

	const mealUpdated = await Meal.findByIdAndUpdate(mealId, req.body, {
		new: true,
		runValidators: true,
	});

	if (!mealUpdated) res.json({ message: `Cannot find meal with id ${mealId}` });

	res.json({
		message: 'Updated',
		mealUpdated,
	});
};

exports.DeleteMeal = async (req, res) => {
	const mealId = req.params._id;

	if (!mealId) res.json({ message: 'Please send ID to delete meal' });

	const deletedMeal = await Meal.findOneAndDelete(mealId);

	if (!deletedMeal) res.json({ message: `Cannot find meal with id ${mealId}` });

	res.json({
		message: `Deleted Meal!`,
		deletedMeal,
	});
};

exports.GetMeal = async (req, res) => {
	const mealId = req.params._id;

	if (!mealId) res.json({ message: 'Please add ID' });

	const meal = await Meal.findById(mealId);

	if (!meal) res.json({ message: `There is no meal with id ${mealId}` });

	console.log(meal);

	res.json({
		meal,
	});
};
