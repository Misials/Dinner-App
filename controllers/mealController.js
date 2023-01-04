const Meal = require('../models/mealModel');

exports.getAllMeals = async (req, res) => {
	const allMeals = await Meal.find();
	if (!allMeals) return res.status(204).json({ message: 'No meals found.' });
	res.json({ allMeals });
};

exports.postNewMeal = async (req, res) => {
	if (!req?.body?.meal_name || !req?.body?.prepering_time) {
		return res.status(400).json({ message: 'Meal name and prepering time are required!' });
	}

	try {
		const newMeal = await Meal.create({
			meal_name: req.body.meal_name,
			prepering_time: req.body.prepering_time,
			ingredients: req?.body?.ingredients,
		});

		res.status(201).json({ message: 'Created successfully', newMeal });
	} catch (err) {
		console.log(err);
	}
};

exports.updateMeal = async (req, res) => {
	if (!req?.params?._id) {
		return res.status(400).json({ message: 'ID parameter is required!' });
	}

	const meal = await Meal.findByIdAndUpdate(req.params._id, req.body, {
		new: true,
		runValidators: true,
	});

	if (!meal) return res.status(204).json({ message: `There is no meal with id ${req.params._id}` });

	res.status(200).json({ message: 'Updated successfully', meal });
};

exports.deleteMeal = async (req, res) => {
	if (!req?.params?._id) {
		return res.status(400).json({ message: 'ID parameter is required!' });
	}

	const meal = await Meal.findByIdAndDelete(req.params._id);

	if (!meal) return res.status(204).json({ message: `There is no meal with id ${req.params._id}` });

	res.status(200).json({ message: 'Deleted successfully', meal });
};

exports.getMeal = async (req, res) => {
	if (!req?.params?._id) {
		return res.status(400).json({ message: 'ID parameter is required!' });
	}

	const meal = await Meal.findById(req.params._id);

	if (!meal) return res.status(204).json({ message: `There is no meal with id ${req.params._id}` });

	res.status(200).json({ meal });
};
