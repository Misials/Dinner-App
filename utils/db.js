require('dotenv').config();
const mongoose = require('mongoose');

const DB_LINK = process.env.DB_LINK.replace('<password>', process.env.DB_USER_PASSWORD);

exports.DBConnect = () => {
	mongoose.set('strictQuery', true);
	mongoose.connect(DB_LINK, () => {
		console.log('Connected to DB');
	});

	const db = mongoose.connection;

	db.on('error', err => {
		console.log(err);
	});
};
