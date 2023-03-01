const { Sequelize } = require("sequelize");
//const { applyExtraSetup } = require("./extra-setup");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

const sequelize = new Sequelize({
	username: "dino_wars",
	password: "myPass",
	database: "dev_dino_wars_db",
	host: "3.71.1.101",
	dialect: "postgres",
	port: 5432,
});

const modelDefiners = [];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

//applyExtraSetup(sequelize);

module.exports = sequelize;
