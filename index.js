const express = require('express')
const app = express()
const routes = require('./routers.js')
const DBconection = require('./db.js')
const path = require('path')
var cors = require('cors')

app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})
//const openapiSpecification = swaggerJsdoc(options);
//const swaggerUi = require('swagger-ui-express');
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//conection base datos
DBconection()

//ruteo
routes(app)


//server escuchando
app.listen(process.env.PORT || 3000,()=>{
	console.log('programa almacen andando en el puerto '+ process.env.PORT)
})