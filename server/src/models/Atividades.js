export default (sequelize, DataTypes) => {
  const Atividades = sequelize.define('Atividades', {
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigoPaciente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Paciente',
        key: 'codigo'
      }
    },
    atividade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dataVencimento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM(['Aberto', 'Finalizado', 'Atrasado']),
      allowNull: false,
      defaultValue: 'Aberto'
    }
  }, {
    classMethods: {
      associate: (models) => {
        Atividades.belongsTo(models.Paciente, { foreignKey: 'codigoPaciente' })
      }
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  })

  return Atividades
}
