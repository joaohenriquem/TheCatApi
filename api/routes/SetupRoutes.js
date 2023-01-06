const router = require("express").Router();
const SetupController = require("../controllers/SetupController");
router.post("/setup/loadSetup", SetupController.loadSetup);
module.exports = router;