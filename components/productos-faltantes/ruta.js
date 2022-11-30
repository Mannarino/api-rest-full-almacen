const express = require('express')
const router = express.Router()
const controller = require('./controller.js')


router.get('/',async(req,res)=>{ 
	  
	  	let respuesta = await controller.obtener()
        res.send(respuesta)    
})

router.post('/', async (req,res)=>{
	    const nombre = req.body.nombre
		
	  try{
	  	 respuesta= await controller.crear(nombre)
	  	res.send(respuesta)
	  }catch(e){
	  	console.log(e)
	  	res.send('internal server error')
	  }
		
		
})
router.delete('/:id',async(req,res)=>{ 
	  const id = req.params.id
	  
        let respuesta = await controller.eliminarPorId(id)
        res.send(respuesta)  

})
module.exports=router