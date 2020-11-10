import { Controller } from './Controller'
import Sequelize from 'sequelize'

const Op = Sequelize.Op

class PacienteController extends Controller {
  constructor (app) {
    super()
    this.modelo = app.datasource.models.Paciente
    this.includesConsulta = [
      {
        association: 'Atividades'
      }
    ]
  }

  async getAllFilter (req, res) {
    try {
      const { valor } = req.query

      if (!valor) throw new Error('Atributo ou valor não encontrado!')

      const filtro = {
        [Op.or]: [
          {
            cpf: {
              [Op.like]: `%${valor}%`
            }
          },
          {
            nome: {
              [Op.like]: `%${valor}%`
            }
          }
        ]
      }

      const response = await this.modelo.findAll({ where: filtro })
      return res.status(200).json(response)
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message })
    }
  }
}

export { PacienteController }
