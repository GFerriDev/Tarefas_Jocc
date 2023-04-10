require('dotenv').config()

const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) =>{
    res.json({"teste": "test"})
})

app.use(routes)
const port = 3333
app.listen(port, () => {
  console.log()
  console.log(`Escutando na porta ${port}`)
  console.log(`CTRL + Clique em http://localhost:${port}`)
})