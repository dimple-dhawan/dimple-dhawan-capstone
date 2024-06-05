const router =  require("express").Router();
const interestController = require("../controllers/interestController");

router
    .route("/")
    .get(interestController.interests);

module.exports = router;