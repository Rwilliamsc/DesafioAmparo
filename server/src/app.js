import 'dotenv/config'
import { CREATE_SERVER, DATA_SOURCE, DATA_BASE } from './configs'
import RouterManager from './routes/RouterManger'

const app = CREATE_SERVER()

// Atribuição da porta onde será eposta a API
app.set('port', process.env.PORT)

// Atribui o datasource ao app
app.datasource = DATA_SOURCE(DATA_BASE)

// Configura as rotas de acesso
RouterManager(app)

export { app }
