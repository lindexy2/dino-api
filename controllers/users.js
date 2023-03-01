class Controller {
	registration(req, res, next) {
		res.send({
			status: false,
			error: "This email is already registered",
		});
	}
	verification(req, res, next) {
		res.send({
			status: true,
		});
	}
	authorization(req, res, next) {
		res.send({
			status: false,
			error: "email or password incorect",
		});
	}
}

module.exports = new Controller();
