const router = require("express").Router();
const controller = require("../controllers/users");

router.post("/registration", controller.registration);
router.post("/verification", controller.verification);
router.post("/authorization", controller.authorization);

module.exports = router;
