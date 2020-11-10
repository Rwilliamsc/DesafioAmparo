
const ROTAS = (app, rota, Controller) => {
  app.route(`/${rota}`)
    .get((req, res) => {
      console.log('teste')
      res.status(200).send()
    })
    .post((req, res) => {
      res.status(301).send()
    })

  app.route(`/${rota}/:id`)
    .get((req, res) => {
      console.log('teste com id')
      res.status(200).send(req.params.id)
    })
    .put((req, res) => {
      res.status(200).send()
    })
    .delete((req, res) => {
      res.status(200).send()
    })
}

export { ROTAS }
