const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/balance", controller.getBalance);
router.get("/staking/balance", controller.getStakingBalance);
router.post("/staking/set", controller.setStaking);
router.post("/staking/withdraw", controller.withdrawStaking);

module.exports = router;
