const express = require('express')
const router = express.Router()
const obtenerValoresDeEntorno = require('./../../environment/getEnvironment.js')
const config =obtenerValoresDeEntorno()



router.post('/', async (req,res)=>{
	    const user = req.body.user
		const password = req.body.password
		
		if(user==config.user && password == config.password){
			res.send({message:'logueado con exito',success:true})
		}
	    else{
	    	res.status(401).send({message:'hubo un fallo o oermiso negado',success:false})
	    }
		
		
})

module.exports=router