const mongoose = require('mongoose')

module.exports= function db(){
	mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@cluster0.wq4xmib.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority` ,
	function(){console.log('conectado a base de datos')})
}
