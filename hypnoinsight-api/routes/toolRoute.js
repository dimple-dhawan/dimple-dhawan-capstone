const router =  require("express").Router();
const toolController = require("../controllers/toolController");

router
    .route("/")
    .get(toolController.tools);

module.exports = router;