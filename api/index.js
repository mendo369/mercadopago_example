const express = require('express')
const morgan = require('morgan')
const mercadopago = require('mercadopago')
const cors = require('cors')
require('dotenv').config()

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

// server.use()

// server.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin")
//     res.header("Access-Control-Allow-Credentials")
//     res.header("Access-Control-Allow-Headers", "Origin")
// })

mercadopago.configure({access_token:process.env.MERCADOPAGO_KEY})
server.post('/payment', (req,res)=>{
    const prod = req.body
    let preferences = {
        items:[
            {
                id:123,
                title: prod.title,
                currency: 'COP',
                description: prod.description,
                quantity: prod.quantity,
                unit_price: prod.unit_price
            }
        ]
        ,
        back_urls:{
            success: "localhost:4000",
            failure: '',
            pending: '',//cuando se hace un pago físico y se reqquiere ir a algun lugar a pagar
        }
    }
    mercadopago.preferences.create(preferences).then(response=>res.status(200).send({response}))
    // res.status(200).send('funciona')
    
})

server.listen(4000, ()=>{
    console.log("Servidor corriendo en el puerto 4000")
})