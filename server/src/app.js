import 'dotenv/config'
import { CREATE_SERVER, DATA_SOURCE, DATA_BASE } from './configs'
import { ROUTER_MANAGER } from './routes/RouterManager'

const app = CREATE_SERVER()

// Atribui o datasource ao app
app.datasource = DATA_SOURCE(DATA_BASE)

// Configura as rotas de acesso
ROUTER_MANAGER(app)

export { app }
