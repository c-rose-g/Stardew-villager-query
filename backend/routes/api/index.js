const router = require("express").Router();
const giftRouter = require("./gifts");
router.use("/gifts", giftRouter);

module.exports = router;
