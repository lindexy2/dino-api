class Controller {
	getBalance(req, res, next) {
		res.send({
			currency: "DINW",
			value: 12964,
		});
	}
	getStakingBalance(req, res, next) {
		res.send({
			currency: "DINW",
			value: 17521,
		});
	}
	setStaking(req, res, next) {
		res.send({
			status: true,
		});
	}
	withdrawStaking(req, res, next) {
		res.send({
			status: true,
		});
	}
}

module.exports = new Controller();
