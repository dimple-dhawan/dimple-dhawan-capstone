const router =  require("express").Router();
const prescreeningAnswerController = require("../controllers/prescreeningAnswerController");

router
    .route("/")
    .get(prescreeningAnswerController.allPrescreeningAnswers);

router
    .route("/:question_id")
    .get(prescreeningAnswerController.prescreeningAnswerOptions);

module.exports = router;