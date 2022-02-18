const morgan = require("morgan");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const mailRoutes = require("./api/routes/mail");

//Handling CORS Errors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); //Basically allows all domains to access our API
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header(
			"Access-Control-Allow-Methods",
			"PUT, POST, PATCH, GET, DELETE"
		);
		return res.status(200).json({});
	}
	next();
});

//Routes which should handle requests
app.use("/mail", mailRoutes);

app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
