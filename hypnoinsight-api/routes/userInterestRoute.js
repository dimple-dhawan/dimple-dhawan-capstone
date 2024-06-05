const router =  require("express").Router();
const userInterestsController = require("../controllers/userInterestController");

router
    .route("/")
    .post(userInterestsController.addUserInterest);

module.exports = router;