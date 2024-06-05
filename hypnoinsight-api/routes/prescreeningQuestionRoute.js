const router =  require("express").Router();
const prescreeningQuestionController = require("../controllers/prescreening-question-controller");

router
    .route("/")
    .get(prescreeningQuestionController.prescreeningQuestions);

module.exports = router;