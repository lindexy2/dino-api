class Controller {
	getResults(req, res, next) {
		res.send({
			winers: [
				{ "0xcdca5be573152ee74bfc1008661924d42974b98b": null },
				{ "0xcdca5be573152ee74bfc1008661924d42974b98b": 36 },
				{ "0x114e4dAD83f82b512D4928595279eEea5dBeFc41": 53 },
			],
		});
	}
	setCoefficient(req, res, next) {
		res.send({
			coefficient: 0.5,
		});
	}
	addPrize(req, res, next) {
		res.send({
			status: true,
			id: 57,
		});
	}
	changePrize(req, res, next) {
		res.send({
			status: true,
			id: 57,
		});
	}
}

module.exports = new Controller();
