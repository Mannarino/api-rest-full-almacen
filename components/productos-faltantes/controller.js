const model = require('./model')
const controllerProductos = {
	crear: async (nombre,precioCosto,porcentajeGanancia,precioFinal)=>{

		const productoCreada= await model.create({
			nombre:nombre,
			precioCosto:precioCosto,
			porcentajeGanancia:porcentajeGanancia,
			precioFinal:precioFinal
		})
        return productoCreada
	},
	obtener: async ()=>{

		const listaCompleta= await model.find({})
		
        return listaCompleta
	},
	
	
	obtenerPorId: async (id)=>{

		const encontradoById= await model.findById(id)
		
        return encontradoById
	}
	,
	actualizarPorId: async (id,body)=>{

		const actualizadoById= await model.findByIdAndUpdate(id,body)
		
        return actualizadoById
	},
	eliminarPorId: async (id)=>{

		const eliminadoById= await model.findByIdAndDelete(id)
		
        return eliminadoById
	}
}

module.exports = controllerProductos