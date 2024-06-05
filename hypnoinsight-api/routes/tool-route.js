const router =  require("express").Router();
const toolController = require("../controllers/tool-controller");

router
    .route("/")
    .get(toolController.tools);

module.exports = router;