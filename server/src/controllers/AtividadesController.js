import { Controller } from './Controller'

class AtividadesController extends Controller {
  constructor (app) {
    super()
    this.modelo = app.datasource.models.Atividades
    this.includesConsulta = [
      {
        association: 'Paciente'
      }
    ]
  }
}

export { AtividadesController }
