const router =  require("express").Router();
const userAnswerController = require("../controllers/userAnswerController");

router
    .route("/")
    .post(userAnswerController.addUserAnswer);

module.exports = router;