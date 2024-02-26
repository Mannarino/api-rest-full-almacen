const routerProductos = require('./components/productos/ruta.js')
const routerProductosFaltantes = require('./components/productos-faltantes/ruta.js')
const login = require('./components/login/ruta.js')

function rutas(app) {
	app.use('/productos', routerProductos)
	app.use('/productos-faltantes', routerProductosFaltantes)
	app.use('/login', login)
	
}

module.exports = rutas