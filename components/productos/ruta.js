const express = require('express')
const router = express.Router()
const controller = require('./controller.js')


router.get('/',async(req,res)=>{ 
	  
	  	let todosLosProductos = await controller.obtener()
        res.send(todosLosProductos)    
})
router.get('/:id',async(req,res)=>{ 
	  const id = req.params.id
	  
        let elProductoEspecifico = await controller.obtenerPorId(id)
        res.send(elProductoEspecifico)  

})
router.put('/:id',async(req,res)=>{ 
	  const id = req.params.id
	  
        let elProductoEspecificoActualizado = await controller.actualizarPorId(id,req.body)
        res.send(elProductoEspecificoActualizado)  

})
router.delete('/:id',async(req,res)=>{ 
	  const id = req.params.id
	  
        let respuesta = await controller.eliminarPorId(id)
        res.send(respuesta)  

})
router.post('/', async (req,res)=>{
	    const nombre = req.body.nombre
		const precioCosto = req.body.precioCosto
		const porcentajeGanancia = req.body.porcentajeGanancia
		const precioFinal = req.body.precioFinal
	  try{
	  	 respuesta= await controller.crear(nombre,precioCosto,porcentajeGanancia,precioFinal)
	  	res.send(respuesta)
	  }catch(e){
	  	console.log(e)
	  	res.send('internal server error')
	  }
		
		
})

module.exports=router