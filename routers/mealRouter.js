const express = require('express');
const mongoose = require('mongoose');

const { GetAllMeals, PostNewMeal, PutUpdateMeal, DeleteMeal, GetMeal } = require('../controllers/mealController');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		message: 'Meal APP - Home Page',
	});
});

router.get('/meals', GetAllMeals);

router.post('/meals', PostNewMeal);

router.put('/meals/:_id', PutUpdateMeal);

router.delete('/meals/:_id', DeleteMeal);

router.get('/meals/:_id', GetMeal);

module.exports = router;
