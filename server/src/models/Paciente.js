export default (sequelize, DataTypes) => {
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
    classMethods: {
      associate: (models) => {
        Paciente.hasMany(models.Atividades, { foreignKey: 'codigoPaciente' })
      }
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  })

  return Paciente
}
