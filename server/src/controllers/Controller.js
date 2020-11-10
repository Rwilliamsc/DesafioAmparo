import HttpStatus from 'http-status'
class Controller {
  constructor () {
    this.modelo = ''
    this.includesConsulta = []
  }

  async getAll (req, res) {
    try {
      console.log(this.modelo)
      const response = await this.modelo.findAll({ include: this.includesConsulta })

      return res.status(HttpStatus.OK).json(response)
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async findOne (req, res) {
    try {
      const codigo = req.params.id
      const response = await this.modelo.findOne({ where: { codigo }, include: this.includesConsulta })

      return res.status(HttpStatus.OK).json(response)
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async create (req, res) {
    try {
      const dados = req.body
      const response = await this.modelo.create(dados)

      return res.status(HttpStatus.CREATED).json(response)
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async update (req, res) {
    try {
      const codigo = req.params.id
      const dados = req.body
      const response = await this.modelo.update(dados, { where: { codigo } })

      return res.status(HttpStatus.OK).json(response)
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async delete (req, res) {
    try {
      const codigo = req.params.id
      await this.modelo.destroy({ where: { codigo } })

      return res.status(HttpStatus.NO_CONTENT).send()
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }
}

export { Controller }
