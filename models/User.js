module.exports = (sequelize, DataTypes) => {
	return sequelize.define('User', {
		userid: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		userpw: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		username: {
			type: DataTypes.STRING(20)
		}
	}, {
		charset: 'utf8',
		tableName: 'seq-user'
	});
}