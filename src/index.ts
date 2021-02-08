import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import ProductoBD from './ProductoBD'

dotenv.config() 
const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

let producto = new ProductoBD()


router.get('/productos', (req, res) => {
  try {
    res.status(200).json(producto.getAll())
  } catch (err) { return res.status(500).json( { error: err.message })}
})

router.get('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.getOne(+req.params.id))
  } catch (err) { return res.status(500).json( { error: err.message })}
})

router.post('/productos', (req, res) => {
  try {    
    if(!req.body.title && req.body.title == '') {
      throw Error('Falta el titulo del producto')
    }

    res.status(200).json(producto.add(req.body))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})

router.put('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.update(req.body))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})

router.delete('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.delete(+req.params.id))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})


app.use('/api', router)



let server = app.listen( process.env.PORT, () => console.log(`Escuchando en el puerto ${process.env.PORT}`))

server.on('error', (err) => { console.log(`Error de conexion: ${err}`)})