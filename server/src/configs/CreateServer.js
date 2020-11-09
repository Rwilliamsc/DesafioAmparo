import express from 'express'
import cors from 'cors'

export const CREATE_SERVER = () => {
  const app = express()

  // Desativa o X-Powered-By: Express
  app.disable('x-powered-by')

  // Parse JSON
  app.use(express.json())

  // Permite acesso externo
  app.use(cors())

  return app
}
