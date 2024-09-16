const express = require("express");
const router = express.Router();

router.get("/hello/world", function (req, res) {
	res.send("Hello World!");
});

// Serve React build files in production - may need to update based on frontend framework
if (process.env.NODE_ENV === "production") {
	const path = require("path");
	// Serve the frontend's index.html file at the root route
	router.get("/", (req, res) => {
		// res.cookie("XSRF-TOKEN", req.csrfToken());
		// return
		res.sendFile(
			path.resolve(__dirname, "../../frontend", "build", "index.html")
		);
	});

	// Serve the static assets in the frontend's build folder
	router.use(express.static(path.resolve("../frontend/build")));

	// Serve the frontend's index.html file at all other routes NOT starting with /api
	router.get(/^(?!\/?api).*/, (req, res) => {
		res.cookie("XSRF-TOKEN", req.csrfToken());
		// return
		res.sendFile(
			path.resolve(__dirname, "../../frontend", "build", "index.html")
		);
	});
}


module.exports = router;
