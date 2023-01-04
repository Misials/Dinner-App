const express = require('express');
const mongoose = require('mongoose');

const { getAllMeals, postNewMeal, updateMeal, deleteMeal, getMeal } = require('../controllers/mealController');

const router = express.Router();

router.route('/').get((req, res) => {
	res.json({
		message: 'Meal APP - Home Page',
	});
});

router.route('/meals').get(getAllMeals).post(postNewMeal);

router.route('/meals/:_id').put(updateMeal).delete(deleteMeal).get(getMeal);

module.exports = router;
