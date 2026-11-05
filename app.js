import express from 'express'
import router from './router.js'

const  app = express()
app.use(express.json())

app.use('/usuario', router)
const  PORT = 5000

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(PORT, () => {
    console.log('Servidor  corriendo por el PUERTO ' , PORT)
})


