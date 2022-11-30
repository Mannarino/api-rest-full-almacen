const mongoose = require('mongoose')

const producto =  mongoose.Schema({
	nombre:{type:String,required:true},
	precioCosto:{type:Number,required:true },
	porcentajeGanancia:{type:Number,required:true},
	precioFinal:{type:Number,required:true}
})

const modelProducto = mongoose.model('producto',producto)

module.exports = modelProducto