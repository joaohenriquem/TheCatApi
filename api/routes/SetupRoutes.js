const router = require("express").Router();
const SetupController = require("../controllers/SetupController");
router.post("/setup/loadSetup/:loadCategories/:loadBreeds", SetupController.loadSetup);
module.exports = router;