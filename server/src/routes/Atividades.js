import { AtividadesController } from '../controllers/AtividadesController'
import { ROTAS } from './Rotas'

export default app => {
  const controller = new AtividadesController(app)
  ROTAS(app, 'atividades', controller)
}
