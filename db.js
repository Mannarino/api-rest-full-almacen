const mongoose = require('mongoose')
const obtenerValoresDeEntorno = require('./environment/getEnvironment.js')
const config =obtenerValoresDeEntorno()

module.exports= function db(){
	mongoose.connect(`mongodb+srv://${config.USER_DATABASE}:${config.PASSWORD_DATABASE}@cluster0.wq4xmib.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority` ,
	function(){console.log('conectado a base de datos')})
}


//mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@cluster0.wq4xmib.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority` ,
//	function(){console.log('conectado a base de datos')})