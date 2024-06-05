const router =  require("express").Router();
const interestController = require("../controllers/interest-controller");

router
    .route("/")
    .get(interestController.interests);

module.exports = router;