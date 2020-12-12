module.exports = (env) => {
	if(env == 'production') {
		return {
			username: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
			host: process.env.DB_HOST,
			dialect: process.env.DB_DIALECT
		}
	}
	else {
		return {
			username: process.env.DB_PRD_USER,
			password: process.env.DB_PRD_PASS,
			database: process.env.DB_PRD_NAME,
			host: process.env.DB_PRD_HOST,
			dialect: process.env.DB_PRD_DIALECT
		}
	}
}

