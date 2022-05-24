import 'dotenv/config'

import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());

server.get('/ping' , (rep ,resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero' , (req, resp) => {
    let numero = Number(req.params.numero);
    let dobro = numero * 2;

    resp.send({
        dobro: dobro
    });
})

server.get('/somar', (req , resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let x = a + b;

    resp.send({
        soma: x
    })
})




