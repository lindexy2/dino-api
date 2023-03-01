const router = require("express").Router();
const controller = require("../controllers/lottery");

router.get("/results", controller.getResults);
router.post("/coefficient", controller.setCoefficient);
router.post("/prize", controller.addPrize);
router.put("/prize", controller.changePrize);

module.exports = router;
