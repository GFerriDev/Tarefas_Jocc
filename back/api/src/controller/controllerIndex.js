const connection = require('../database/connection')

const { response } = require('express');
const company = require('../models/modelIndex');

module.exports = {
    async post(req, res){
        const responsePost = {...company}

        const {tarefas, description} = req.body

        const [, affectRows] = await connection.query(`
        INSERT INTO tarefas(tarefa, description) VALUES ('${tarefas}', '${description}')
        `)

        response.success = affectRows > 0

        return res.json(responsePost)
    },

     async get(req, res){
        

        const [, data] = await connection.query(`
        SELECT * FROM tarefas
        `)

        const responseGet = [data]


        return res.json(responseGet)
    },

    async delete(req,res){

        const [, exclude] = await connection.query(`
        DELETE FROM tarefas
        `)

        const responseGet = {...company}


        return res.json(responseGet)
    }
  }