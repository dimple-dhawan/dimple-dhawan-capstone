const router =  require("express").Router();
const userInterestsController = require("../controllers/userInterestController");

router
    .route("/")
    .get(userInterestsController.getUserInterests)
    .post(userInterestsController.addUserInterest);

module.exports = router;