const router =  require("express").Router();
const userAnswerController = require("../controllers/user-answer-controller");

router
    .route("/")
    .post(userAnswerController.addUserAnswer);

module.exports = router;