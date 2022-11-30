const mongoose = require('mongoose')

const producto =  mongoose.Schema({
	nombre:{type:String,required:true},
	
})

const modelProductoFaltante = mongoose.model('productoFaltante',producto)

module.exports = modelProductoFaltante