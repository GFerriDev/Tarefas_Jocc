const router = require('express').Router()
const response = require('./controller/controllerIndex')


router.post('/',  response.post)

router.get('/tarefas', response.get)

router.delete('/', response.delete)

module.exports = router