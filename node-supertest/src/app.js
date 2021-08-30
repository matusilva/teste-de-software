const express = require('express')
const app = express()

app.use(express.json())
app.use('/products', require('./routes/products'))

app.listen(3000)
console.log('Servidor aberto na porta 3000')

module.exports = app
