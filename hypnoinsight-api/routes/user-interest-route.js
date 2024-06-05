const router =  require("express").Router();
const userInterestsController = require("../controllers/user-interest-controller");

router
    .route("/")
    .post(userInterestsController.addUserInterest);

module.exports = router;