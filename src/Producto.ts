
class Producto {
  private id: number;
  private title: string;
  private price: number;
  private thumbnail: string;

  constructor(id: number, title: string, price: number, thumbnail: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  getId () {
    return this.id
  }
}

export default Producto