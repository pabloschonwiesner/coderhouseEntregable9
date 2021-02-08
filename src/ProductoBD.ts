import Producto from './Producto'

class ProductoBD {
  private productos: Producto[];
  constructor() {
    this.productos = []
  }

  getAll () {
    if(this.productos.length == 0) {
      throw Error('No hay productos cargados')
    }
    return this.productos
  }

  getOne ( id: number ) {
    let producto = this.productos.find( i => i.getId() == id)
    if(!producto) {
      throw Error('Producto no encontrado')
    }
    return producto
  }

  add ( producto: any ) {
    let largo = this.productos.length
    let nuevoProducto = new Producto( largo + 1, producto.title, producto.price, producto.thumbnail );
    this.productos.push(nuevoProducto);
    return this.productos[this.productos.length -1]
  }


}


export default ProductoBD