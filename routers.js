const routerProductos = require('./components/productos/ruta.js')
const routerProductosFaltantes = require('./components/productos-faltantes/ruta.js')

function rutas(app) {
	app.use('/productos/agregar-productos', routerProductos)
	app.use('/productos-faltantes', routerProductosFaltantes)
	
}

module.exports = rutas