const router = require("express").Router();

const CatsController = require("../controllers/CatsController");

router.get("/cats/listBreeds", CatsController.listBreeds);
router.get("/cats/listInfoByBreeds/:id", CatsController.listInfoByBreeds);
router.get("/cats/listInfoByTemperament/:temperament", CatsController.listInfoByTemperament);
router.get("/cats/listInfoByOrigin/:origin", CatsController.listInfoByOrigin);
router.get("/cats/listInfoByOrigin/", CatsController.listInfoByOrigin);

module.exports = router;