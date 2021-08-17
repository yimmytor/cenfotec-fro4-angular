import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProductoCarrito } from './principal/models/producto-carrito';
import { IProducto } from './principal/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  private indice = 1;
  private items = new  Array<IProductoCarrito>();
  private itemsSubject = new Subject<Array<IProductoCarrito>>();
  public itemsObservable$ = this.itemsSubject.asObservable();

  constructor() { } 
  
  actualizar() {
    this.itemsSubject.next(this.items);
  }

  agregarItem(item: IProducto | undefined) {
    if(item) {
      this.items.push({
        id: this.indice++,
        productNumber: item.productNumber,
        nombre: item.nombre,
        precio: item.precio,
        urlImagen: item.urlImagen
      });

      this.itemsSubject.next(this.items);
    }
  }

  eliminarItem(id: number) {
    let elemento = this.items.map((item,index) => item.id === id ? index : -1)[0];
    
    if(elemento) {
      this.items.splice(elemento,1);
      this.itemsSubject.next(this.items);
    }
  }
}
