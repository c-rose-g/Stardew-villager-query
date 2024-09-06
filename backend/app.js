// initialize express
const express = require("express");
const app = express();
// route handling
const routes = require("./routes");
// Security Middleware
const cors = require("cors");
if (!isProduction) {
	// enable cors only in development
	app.use(cors());
}
app.use(routes);

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
	const err = new Error("The requested resource couldn't be found.");
	err.title = "Resource Not Found";
	err.errors = ["The requested resource couldn't be found."];
	err.status = 404;
	next(err);
});

const { ValidationError } = require("sequelize");

// Process sequelize errors
app.use((err, _req, _res, next) => {
	// check if error is a Sequelize error:
	if (err instanceof ValidationError) {
		err.errors = err.errors.map((e) => e.message);
		err.title = "Validation error";
	}
	next(err);
});

const isProduction = process.env.NODE_ENV === "production";

// Error formatter
app.use((err, _req, res, _next) => {
	res.status(err.status || 500);
	console.error(err);
	res.json({
		title: err.title || "Server Error",
		message: err.message,
		errors: err.errors,
		stack: isProduction ? null : err.stack,
	});
});

module.exports = app;
