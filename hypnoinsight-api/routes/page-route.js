const router =  require("express").Router();
const pageController = require("../controllers/page-controller");

router
    .route("/")
    .get(pageController.pages);

module.exports = router;