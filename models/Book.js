module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Book', {
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		writer: {
			type: DataTypes.STRING(20)
		},
		comment: {
			type: DataTypes.TEXT()
		}
	}, {
		charset: 'utf8',
		tableName: 'seq-book'
	});
}