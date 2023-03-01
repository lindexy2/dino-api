require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
123
const db = require("./db/index");

const router = require("./routes/index.js");
const userRouter = require("./routes/users");
const lotteryRouter = require("./routes/lottery");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);
app.use("/api/users", userRouter);
app.use("/api/lottery", lotteryRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server started");
	db.sync()
		.then((res) => {
			console.log("db connected");
		})
		.catch((error) => {
			console.log(error);
		});
});
