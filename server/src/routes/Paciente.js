import { PacienteController } from '../controllers/PacienteController'
import { ROTAS } from './Rotas'

export default app => {
  const controller = new PacienteController(app)

  app.get('/paciente/filtro', (req, res) => {
    controller.getAllFilter(req, res)
  })

  ROTAS(app, 'paciente', controller)
}
