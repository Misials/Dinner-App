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
	// const mealId = req.params._id;
	// const newName = req.body.meal_name;
	// const newPreperingTime = req.body.prepering_time;
	// const newIngredients = req.body.ingredients;

	// if (!mealId) {
	// 	res.json({
	// 		message: 'Please add ID of meal you want to update',
	// 	});
	// }

	// const meal = Meal.findOne({ _id: mealId });

	// if (!meal) {
	// 	res.json({
	// 		message: `There is no meal with ID ${mealId}`,
	// 	});
	// }

	// if (newName) Meal.findOneAndUpdate({ _id: mealId }, { meal_name: newName });
	// if (newPreperingTime) Meal.findOneAndUpdate({ _id: mealId }, { prepering_time: newPreperingTime });
	// if (newIngredients) Meal.findOneAndUpdate({ _id: mealId }, { ingredients: newIngredients });

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
