require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('../routers/mealRouter');

const PORT = process.env.PORT;
const app = express();

const { DBConnect } = require('./db');

app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);

	DBConnect();
});
