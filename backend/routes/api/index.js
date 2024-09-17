const router = require("express").Router();

const giftsRouter = require("./gifts");

router.use("/gift", giftsRouter);

module.exports = router;
