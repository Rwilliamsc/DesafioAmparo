module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cpf: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  })

  return Paciente
}
