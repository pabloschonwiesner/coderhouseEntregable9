import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import ProductoBD from './ProductoBD'

dotenv.config() 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => console.log(__dirname))

let producto = new ProductoBD()


app.get('/api/productos', (req, res) => {
  try {
    res.status(200).json(producto.getAll())
  } catch (err) { return res.status(500).json( { error: err.message })}
})

app.get('/api/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.getOne(+req.params.id))
  } catch (err) { return res.status(500).json( { error: err.message })}
})

app.post('/api/productos', (req, res) => {
  try {    
    res.status(200).json(producto.add(req.body))
  } catch (err) { console.log(`err: ${err}`)}
})





let server = app.listen( process.env.PORT, () => console.log(`Escuchando en el puerto ${process.env.PORT}`))

server.on('error', (err) => { console.log(`Error de conexion: ${err}`)})